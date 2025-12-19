import NavBar from "../NavBarComponent"
import ListRender from "../ListRenderComponent"

import {useState} from 'react'
import { useEffect } from "react"

//asset fotos
import Morning from "/src/assets/P1080257.jpg"
import Bird from "/src/assets/P1080268.jpg"
import Bird2 from "/src/assets/P1080328.jpg"
import Street from "/src/assets/P1080333.jpg"

// Imagens

const HomePage = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        // O Vite busca todas as imagens .JPG ou .jpg na pasta assets
        const imagensGlob = import.meta.glob('/src/assets/*.{jpg,JPG,jpeg,png}', { eager: true });
        
        // Converte o objeto que o Vite retorna em um array de caminhos (strings)
        const caminhosDasImagens = Object.values(imagensGlob).map(img => img.default);
        
        setLista(caminhosDasImagens);
    }, []);

    return (
        <div>
            <NavBar/>

            <ListRender lista={lista}></ListRender>
        </div>
    )
}

export default HomePage