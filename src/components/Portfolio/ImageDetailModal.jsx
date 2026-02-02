import React, { useEffect } from 'react';
import './Portfolio.css';

const ImageDetailModal = ({ imagem, fechar }) => {
    if (!imagem) return null;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') fechar();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fechar]);

    return (
        <div className="modal-overlay" onClick={fechar}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="modal-grid">
                    
                    {/* Imagem */}
                    <div className="modal-image-col">
                        <img 
                            src={imagem.src} 
                            alt={imagem.titulo} 
                            className="modal-image"
                        />
                    </div>

                    {/* Detalhes */}
                    <div className="modal-details-col">
                        <div className="modal-header-row">
                            <h3>{imagem.titulo}</h3>
                            <button type="button" className="btn-close" aria-label="Close" onClick={fechar}></button>
                        </div>
                        
                        <p className="modal-description">{imagem.nota}</p>
                        <hr />

                        <h5 className="mb-3">Dados da Captura</h5>
                        <ul className="details-list">
                            <li className="details-item">
                                <strong>Câmera:</strong> <span>{imagem.camera}</span>
                            </li>
                            <li className="details-item">
                                <strong>Lente:</strong> <span>{imagem.lente}</span>
                            </li>
                            <li className="details-item">
                                <strong>ISO:</strong> <span>{imagem.iso}</span>
                            </li>
                            <li className="details-item">
                                <strong>Velocidade:</strong> <span>{imagem.ss}</span>
                            </li>
                            <li className="details-item">
                                <strong>Abertura:</strong> <span>{imagem.apertura}</span>
                            </li>
                            <li className="details-item">
                                <strong>Data:</strong> <span>{imagem.data}</span>
                            </li>
                            <li className="details-item">
                                <strong>Resolução:</strong> <span>{imagem.resolucao}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDetailModal;