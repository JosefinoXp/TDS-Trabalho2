import { useState, useEffect } from 'react'
import NavBar from "../NavBarComponent"
import ListRender from "../ListRenderComponent"
import ImageDetailModal from './ImageDetailModal'

import { useCarregarFotos } from '../../hooks/CarregarImagens'

// Biblioteca para ler metadados
import exifr from 'exifr'

const HomePage = () => {
    // Estado apenas para controlar o Modal (Visual)
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    // 2. Use o Hook para pegar os dados
    const { lista, carregando } = useCarregarFotos();

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