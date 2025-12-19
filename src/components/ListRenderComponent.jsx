const ListRender = ({lista}) => {

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