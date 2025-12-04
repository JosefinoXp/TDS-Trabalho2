import {useState} from 'react'

//asset fotos
import Morning from "/src/assets/P1080257.jpg"
import Bird from "/src/assets/P1080268.jpg"
import Bird2 from "/src/assets/P1080328.jpg"
import Street from "/src/assets/P1080333.jpg"

const ListRender = () => {
    const [lista] = useState([Morning, Bird, Bird2, Street, Bird, Bird, Bird, Street, Morning, Bird, Bird2
    ]);

    // queria fazer algo bem parecido com masonry, IA deu isso aqui

    const masonryStyle = {
        columnCount: 4,
        columnGap: '16px'
    };

    return(
        <div style={masonryStyle}>
            {lista.map( (el, i) => (
                <img key={i} src={el} style={{width: '100%', marginBottom: '16px', display: 'block'}}/>
            ))}
        </div>
    );
};

export default ListRender;