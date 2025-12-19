import React from 'react';

const ImageDetailModal = ({ imagem, fechar }) => {
    if (!imagem) return null;

    return (
        // Fundo escuro fixo
        <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-90 d-flex align-items-center justify-content-center"
            style={{ zIndex: 1050 }}
            onClick={fechar} // Clicar fora fecha
        >
            {/* O "Cartão" branco central */}
            <div 
                className="bg-white rounded overflow-hidden shadow-lg" 
                style={{ width: '90%', maxWidth: '1000px', maxHeight: '90vh', display: 'flex' }}
                onClick={(e) => e.stopPropagation()} // Clicar dentro NÃO fecha
            >
                <div className="container-fluid p-0">
                    <div className="row g-0 h-100">
                        
                        {/* LADO ESQUERDO: A Imagem */}
                        <div className="col-md-8 bg-black d-flex align-items-center justify-content-center" style={{minHeight: '400px'}}>
                            <img 
                                src={imagem.src} 
                                alt={imagem.titulo} 
                                style={{ maxHeight: '85vh', maxWidth: '100%', objectFit: 'contain' }} 
                            />
                        </div>

                        {/* LADO DIREITO: Informações */}
                        <div className="col-md-4 p-4 overflow-auto" style={{maxHeight: '90vh'}}>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h3>{imagem.titulo}</h3>
                                <button type="button" className="btn-close" aria-label="Close" onClick={fechar}></button>
                            </div>
                            
                            <p className="text-muted fst-italic mb-4">
                                {imagem.nota}
                            </p>

                            <hr />

                            <h5 className="mb-3">Dados da Captura</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Câmera:</strong> <span>{imagem.camera}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Lente:</strong> <span>{imagem.lente}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>ISO:</strong> <span>{imagem.iso}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Velocidade:</strong> <span>{imagem.ss}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Abertura:</strong> <span>{imagem.apertura}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Data:</strong> <span>{imagem.data}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Resolução:</strong> <span>{imagem.resolucao}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDetailModal;