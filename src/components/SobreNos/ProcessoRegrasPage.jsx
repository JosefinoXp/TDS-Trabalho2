import './SobreNos.css';

const Processos_RegrasPage = () => {
    return(
        <div className="sn-container">
            <h2 className="sn-title">Processos e Regras 📋</h2>
            {/* Reutilizando a mesma caixa branca do formulário */}
            <div className="sn-card">
                <ol className="sn-list-group">
                    <li className="sn-list-item">
                        📅 <strong>Agendamento:</strong> A data só é reservada após contrato e 50% de sinal.
                    </li>
                    <li className="sn-list-item">
                        ⏱️ <strong>Pontualidade:</strong> Atrasos são descontados do tempo total da sessão.
                    </li>
                    <li className="sn-list-item">
                        👀 <strong>Seleção:</strong> Galeria de pré-seleção enviada em até 7 dias úteis.
                    </li>
                    <li className="sn-list-item">
                        🚀 <strong>Entrega:</strong> Prazo final de 30 dias úteis após a seleção.
                    </li>
                    <li className="sn-list-item">
                        📸 <strong>Uso de Imagem:</strong> Podemos usar no portfólio (exceto com acordo de sigilo).
                    </li>
                    <li className="sn-list-item">
                        ❌ <strong>Desistência:</strong> O sinal não é reembolsado (custos de reserva).
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Processos_RegrasPage