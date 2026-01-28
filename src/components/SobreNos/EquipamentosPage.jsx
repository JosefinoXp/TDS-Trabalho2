import { Container, Row, Col, Card } from 'react-bootstrap';

const EquipamentosPage = () => {
    return(
        <Container className="mt-5 text-center">
             <h2 className="mb-4">Nossos Equipamentos</h2>
             <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="mb-3 shadow-sm">
                        {/* Imagem de exemplo - substitua pelo caminho real se tiver */}
                        <Card.Img variant="top" src="https://placehold.co/600x400?text=Camera+Mirrorless" />
                        <Card.Body>
                            <Card.Title>Câmeras Principais</Card.Title>
                            <Card.Text>Sony A7IV / Canon R6 (Full-Frame)</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={6}>
                    <Card className="mb-3 shadow-sm">
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
        </Container>
    )
}

export default EquipamentosPage