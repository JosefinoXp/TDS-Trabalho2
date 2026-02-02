import { useState } from 'react'
import ListRender from "../ListRenderComponent"
import ImageDetailModal from './ImageDetailModal'
import { useCarregarFotos } from '../../hooks/CarregarImagens'
import MensagemHorario from '../../hooks/MensagemHorario'
import './Portfolio.css'

const HomePage = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const { lista, carregando } = useCarregarFotos();

    return (
        <div>
            <div className="portfolio-header">
                <MensagemHorario />
            </div>

            <div className="portfolio-container">
                {carregando ? (
                    <div className="portfolio-loading">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="loading-text">Lendo metadados das imagens...</p>
                    </div>
                ) : (
                    <ListRender 
                        titulo="Galeria de Fotos"
                        lista={lista} 
                        aoClicarNaImagem={(img) => setImagemSelecionada(img)} 
                    />
                )}
            </div>

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