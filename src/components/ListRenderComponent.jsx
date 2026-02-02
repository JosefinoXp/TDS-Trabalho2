import ImageCard from './ImageCard';

const ListRender = ({ lista, aoClicarNaImagem, titulo }) => {

    const masonryStyle = {
        columnCount: 4,
        columnGap: '16px'
    };

    return(
        <div>
            <h3 className="mb-3">{titulo}</h3>
            <div style={masonryStyle}>
                {lista.map((item, i) => (
                    // reuso de componente ImageCard através do loop
                    <ImageCard 
                        key={i} 
                        item={item} 
                        aoClicar={aoClicarNaImagem} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ListRender;