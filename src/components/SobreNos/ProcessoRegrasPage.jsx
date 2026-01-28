import { Container } from 'react-bootstrap';

const Processos_RegrasPage = () => {
    return(
        <Container className="mt-5 d-flex flex-column align-items-center">
            <h2 className="mb-4">Processos e Regras 📋</h2>
            <div className="text-start p-4 bg-light rounded shadow-sm" style={{maxWidth: '800px'}}>
                <ol className="list-group list-group-numbered list-group-flush">
                    <li className="list-group-item bg-transparent">
                        📅 <strong>Agendamento:</strong> A data só é reservada após contrato e 50% de sinal.
                    </li>
                    <li className="list-group-item bg-transparent">
                        Pb <strong>Pontualidade:</strong> Atrasos são descontados do tempo total da sessão.
                    </li>
                    <li className="list-group-item bg-transparent">
                        👀 <strong>Seleção:</strong> Galeria de pré-seleção enviada em até 7 dias úteis.
                    </li>
                    <li className="list-group-item bg-transparent">
                        🚀 <strong>Entrega:</strong> Prazo final de 30 dias úteis após a seleção.
                    </li>
                    <li className="list-group-item bg-transparent">
                        📸 <strong>Uso de Imagem:</strong> Podemos usar no portfólio (exceto com acordo de sigilo).
                    </li>
                    <li className="list-group-item bg-transparent">
                        ❌ <strong>Desistência:</strong> O sinal não é reembolsado (custos de reserva).
                    </li>
                </ol>
            </div>
        </Container>
    )
}

export default Processos_RegrasPage