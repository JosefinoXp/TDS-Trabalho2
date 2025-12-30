import { useState, useEffect } from 'react';
import exifr from 'exifr';

export const useCarregarFotos = () => {
    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarImagens = async () => {
            try {
                // 1. Vite busca todas as imagens na pasta assets
                const modules = import.meta.glob('/src/assets/*.{jpg,JPG,jpeg}', { eager: true });
                const caminhos = Object.values(modules).map(mod => mod.default);

                // 2. Processa cada imagem para ler o EXIF
                const dadosCompletos = await Promise.all(caminhos.map(async (caminho, index) => {
                    let meta = {};
                    try {
                        // Tenta ler os campos principais do EXIF
                        meta = await exifr.parse(caminho, [
                            'Make', 'Model', 'ISO', 'FNumber', 'ExposureTime', 
                            'FocalLength', 'DateTimeOriginal', 'ExifImageWidth', 'ExifImageHeight'
                        ]);
                    } catch (e) {
                        console.warn("Sem EXIF para:", caminho);
                    }

                    // Formatação da Velocidade (de 0.005 para 1/200)
                    let tempoExposicao = meta?.ExposureTime;
                    if (tempoExposicao && tempoExposicao < 1) {
                        tempoExposicao = `1/${Math.round(1 / tempoExposicao)}`;
                    } else if (tempoExposicao) {
                        tempoExposicao = `${tempoExposicao}"`;
                    }

                    // Retorna o objeto formatado
                    return {
                        id: index,
                        src: caminho,
                        titulo: `Fotografia #${index + 1}`,
                        nota: "Título.", 
                        
                        camera: meta?.Model ? `${meta.Make || ''} ${meta.Model}` : "Info não disponível",
                        iso: meta?.ISO || "--",
                        apertura: meta?.FNumber ? `f/${meta.FNumber}` : "--",
                        ss: tempoExposicao || "--",
                        lente: meta?.FocalLength ? `${meta.FocalLength}mm` : "--",
                        data: meta?.DateTimeOriginal ? new Date(meta.DateTimeOriginal).toLocaleDateString('pt-BR') : "--",
                        resolucao: (meta?.ExifImageWidth) ? `${meta.ExifImageWidth} x ${meta.ExifImageHeight} px` : "--"
                    };
                }));

                setLista(dadosCompletos);
            } catch (error) {
                console.error("Erro ao carregar galeria:", error);
            } finally {
                setCarregando(false);
            }
        };

        carregarImagens();
    }, []);

    // O Hook retorna as variáveis que a página precisa
    return { lista, carregando };
};