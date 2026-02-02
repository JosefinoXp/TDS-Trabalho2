import { useState } from "react"
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './SobreNos.css'; // Supondo que você criou o CSS que combinamos

const ContatoPage = () => {
    const [inputs, setInputs] = useState({});
    const [enviado, setEnviado] = useState(false);

    // EVENTO DE FORMULÁRIO 1: onChange (Resolve item 3 - Tipo Evento)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    // EVENTO DE FORMULÁRIO 2: onSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // REQUISIÇÃO HTTP / FETCH API (Resolve item 1 - Obrigatório)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        .then(response => response.json())
        .then(data => {
            console.log("Sucesso:", data);
            setEnviado(true);
            alert("Enviado com sucesso!");
        })
        .catch(err => console.error("Erro:", err));
    }

    return (
        <div className="sn-container">
            <h1 className="sn-title">Entre em contato!</h1>
            
            {enviado && <Alert variant="success">Mensagem enviada!</Alert>}

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

                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default ContatoPage