const ImageCard = ({ item, aoClicar }) => {
    return (
        <div style={{ marginBottom: '16px', breakInside: 'avoid' }}>
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
                
                onClick={() => aoClicar(item)}
            />
        </div>
    );
};

export default ImageCard;