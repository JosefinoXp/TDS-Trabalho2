const ListRender = ({ lista, aoClicarNaImagem }) => {

    const masonryStyle = {
        columnCount: 4,
        columnGap: '16px'
    };

    return(
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
                        // Efeito simples de hover via inline style (opcional)
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        
                        // Ao clicar, envia o objeto INTEIRO (com exif) para o pai
                        onClick={() => aoClicarNaImagem(item)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListRender;