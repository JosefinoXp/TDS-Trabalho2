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
                    <div key={i} style={{marginBottom: '16px', breakInside: 'avoid'}}>
                        <img 
                            src={item.src} 
                            alt={item.titulo}
                            style={{
                                width: '100%', 
                                display: 'block', 
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            
                            onClick={() => aoClicarNaImagem(item)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListRender;