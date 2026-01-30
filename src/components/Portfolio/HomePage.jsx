import { useState, useEffect } from 'react'
import ListRender from "../ListRenderComponent"
import ImageDetailModal from './ImageDetailModal'

import { useCarregarFotos } from '../../hooks/CarregarImagens'

import MensagemHorario from '../../hooks/MensagemHorario'

import exifr from 'exifr'

const HomePage = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const { lista, carregando } = useCarregarFotos();

    return (
        <div>
            <div className="text-center mt-5 mb-3">
                <MensagemHorario />
            </div>

            <div className="container mt-4">
                {carregando ? (
                    <div className="text-center p-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-2">Lendo metadados das imagens...</p>
                    </div>
                ) : (
                    <ListRender 
                        titulo="Galeria de Fotos"
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