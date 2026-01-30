import { Table } from 'react-bootstrap';
import './SobreNos.css';

const PacotesPage = () => {
    return(
        <div className="sn-container">
            <h2 className="sn-title">Nossos Pacotes</h2>
            <Table striped bordered hover responsive className="sn-table-wrapper">
                <thead className="table-dark">
                    <tr>
                        <th>Tipo de Orçamento</th>
                        <th>Inclui</th>
                        <th>Localidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-bold">Ensaio Pessoal (Externo)</td> 
                        <td>Sessão de 2 horas, 2 trocas de roupa, 30 fotos digitais tratadas.</td> 
                        <td>Parques e áreas urbanas de Foz do Iguaçu.</td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Ensaio em Estúdio</td>
                        <td>Sessão de 1h30, fundo infinito, 20 fotos digitais tratadas.</td>
                        <td>Exclusivo em nosso estúdio.</td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Evento Corporativo</td>
                        <td>Cobertura (até 4h), entrega rápida para imprensa, galeria online.</td>
                        <td>Nacional e Internacional (sob consulta).</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PacotesPage