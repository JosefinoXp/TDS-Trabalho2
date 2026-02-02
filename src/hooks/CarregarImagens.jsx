import { useState, useEffect } from 'react';
import exifr from 'exifr';

export const useCarregarFotos = () => {
    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarImagens = async () => {
            try {
                const modules = import.meta.glob('/src/assets/*.{jpg,JPG,jpeg}', { eager: true });
                const caminhos = Object.values(modules).map(mod => mod.default);

                const dadosCompletos = await Promise.all(caminhos.map(async (caminho, index) => {
                    let meta = {};
                    try {
                        meta = await exifr.parse(caminho, [
                            'Make', 'Model', 'ISO', 'FNumber', 'ExposureTime', 
                            'FocalLength', 'DateTimeOriginal', 'ExifImageWidth', 'ExifImageHeight'
                        ]);
                    } catch (e) {
                        console.warn("Sem EXIF para:", caminho);
                    }

                    let tempoExposicao = meta?.ExposureTime;
                    if (tempoExposicao && tempoExposicao < 1) {
                        tempoExposicao = `1/${Math.round(1 / tempoExposicao)}`;
                    } else if (tempoExposicao) {
                        tempoExposicao = `${tempoExposicao}"`;
                    }

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

    return { lista, carregando };
};