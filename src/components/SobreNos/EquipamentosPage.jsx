import { Row, Col, Card } from 'react-bootstrap';
import './SobreNos.css';

const EquipamentosPage = () => {
    return(
        <div className="sn-container">
             <h2 className="sn-title">Nossos Equipamentos</h2>
             <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="sn-equip-card">
                        <Card.Img variant="top" src="https://placehold.co/600x400?text=Camera+Mirrorless" />
                        <Card.Body>
                            <Card.Title>Câmeras Principais</Card.Title>
                            <Card.Text>Sony A7IV / Canon R6 (Full-Frame)</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={6}>
                    <Card className="sn-equip-card">
                        <Card.Img variant="top" src="https://placehold.co/600x400?text=Backup+e+Edicao" />
                        <Card.Body>
                            <Card.Title>Infraestrutura</Card.Title>
                            <Card.Text>
                                Backups em tempo real e notebooks de alta performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
             </Row>
        </div>
    )
}

export default EquipamentosPage