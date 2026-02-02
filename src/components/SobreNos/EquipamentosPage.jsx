import { Row, Col, Card } from 'react-bootstrap';
import './SobreNos.css';

const EquipamentosPage = () => {
    return(
        <div className="sn-container">
             <h2 className="sn-title">Nossos Equipamentos</h2>
             <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="sn-equip-card">
                        <Card.Img variant="top" src="../DMC-FZ-60.png" />
                        <Card.Body>
                            <Card.Title>Câmera Principal</Card.Title>
                            <Card.Text>Lumix DMC-FZ60</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={6}>
                    <Card className="sn-equip-card">
                        <Card.Img variant="top" src="../Server+Notebook.png" />
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