import { useState } from "react"
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContatoPage = () => {
    const [inputs, setInputs] = useState({});
    const [enviado, setEnviado] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulação de POST usando fetch (pode usar um serviço real como Formspree depois)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Sucesso:", data);
            setEnviado(true);
            alert("Formulário enviado com sucesso! (Simulação)");
        })
        .catch((err) => console.error("Erro:", err));
    }

   return (
        <Container className="mt-5 text-center" style={{maxWidth: '800px'}}>
            <h1>Entre em contato!</h1>
            <p>Gostou do que viu? Adoraríamos conversar com você.</p>
            
            {enviado && <Alert variant="success">Mensagem enviada!</Alert>}

            <Form onSubmit={handleSubmit} className="text-start border p-4 rounded shadow-sm bg-light">
                <Form.Group className="mb-3" controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="nome" onChange={handleChange} placeholder="Seu nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="nome@exemplo.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEndereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" name="endereco" onChange={handleChange} placeholder="Rua..." />
                </Form.Group>

                <Form.Label>Interesse em Pacotes:</Form.Label>
                <div className="mb-3">
                    <Form.Check 
                        type="checkbox"
                        label="Ensaio Pessoal"
                        name="pacote1"
                        onChange={handleChange}
                    />
                    <Form.Check 
                        type="checkbox"
                        label="Ensaio Estúdio"
                        name="pacote2"
                        onChange={handleChange}
                    />
                    <Form.Check 
                        type="checkbox"
                        label="Ensaio Corporativo"
                        name="pacote3"
                        onChange={handleChange}
                    />
                </div>

                <Form.Group className="mb-3" controlId="formArquivo">
                    <Form.Label>Referências (Opcional - PDF)</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            
            {/* Segundo formulário simples como pedido (Ex: Newsletter) */}
            <div className="mt-5 p-4 bg-secondary text-white rounded">
                <h4>Newsletter</h4>
                <p>Receba novidades por email</p>
                <div className="d-flex gap-2 justify-content-center">
                    <input type="email" className="form-control w-50" placeholder="Seu melhor email" />
                    <Button variant="dark">Assinar</Button>
                </div>
            </div>
        </Container>
    )
}

export default ContatoPage