import { useState } from "react"
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import './SobreNos.css';
import useHttp from '../../hooks/useHttp';

const ContatoPage = () => {
    const [inputs, setInputs] = useState({});
    const [enviado, setEnviado] = useState(false);
    const { loading, error, sendRequest } = useHttp();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const aoSucesso = (data) => {
            console.log("Resposta do servidor:", data);
            setEnviado(true);
            alert("Formulário enviado com sucesso!");
            setInputs({});
        }
        
        sendRequest(
            'https://jsonplaceholder.typicode.com/posts', 
            'POST', 
            inputs, 
            aoSucesso
        );
    }

    return (
        <div className="sn-container">
            <h1 className="sn-title">Entre em contato!</h1>
            
            {enviado && <Alert variant="success">Mensagem enviada!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="sn-card">
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="nome" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Select name="assunto" onChange={handleChange}>
                        <option>Orçamento</option>
                        <option>Dúvida</option>
                        <option>Feedback</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} name="mensagem" onChange={handleChange} />
                </Form.Group>

                <Form.Label>Interesse:</Form.Label>
                <div className="mb-3">
                    <Form.Check type="checkbox" label="Ensaio pessoal" name="pacote1" onChange={handleChange} />
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Referências (PDF)</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : "Enviar"}
                </Button>
            </Form>
        </div>
    )
}

export default ContatoPage