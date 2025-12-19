import { useState, useEffect } from 'react'
import NavBar from "../NavBarComponent"
import ListRender from "../ListRenderComponent"
import ImageDetailModal from './ImageDetailModal'

// Biblioteca para ler metadados
import exifr from 'exifr'

const HomePage = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarImagens = async () => {
            // 1. Vite busca todas as imagens na pasta assets
            const modules = import.meta.glob('/src/assets/*.{jpg,JPG,jpeg,png}', { eager: true });
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

                // Retorna o objeto formatado para a lista
                return {
                    id: index,
                    src: caminho,
                    titulo: `Fotografia #${index + 1}`,
                    nota: "Título.", // Você pode personalizar isso depois
                    
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
            setCarregando(false);
        };

        carregarImagens();
    }, []);

    return (
        <div>
            <NavBar/>

            <div className="container mt-4">
                {carregando ? (
                    <div className="text-center p-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-2">Lendo metadados das imagens...</p>
                    </div>
                ) : (
                    <ListRender 
                        lista={lista} 
                        aoClicarNaImagem={(img) => setImagemSelecionada(img)} 
                    />
                )}
            </div>

            {/* Renderiza o Modal APENAS se houver uma imagem selecionada */}
            {imagemSelecionada && (
                <ImageDetailModal 
                    imagem={imagemSelecionada} 
                    fechar={() => setImagemSelecionada(null)} 
                />
            )}
        </div>
    )
}

export default HomePage