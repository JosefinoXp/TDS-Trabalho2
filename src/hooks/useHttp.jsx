import { useState } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (url, method, body, callback) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : null,
            });

            if (!response.ok) {
                throw new Error('Algo deu errado na requisição!');
            }

            const data = await response.json();
            callback(data); // Executa o que a página quiser fazer com os dados
        } catch (err) {
            setError(err.message || 'Algo deu errado!');
        } finally {
            setLoading(false); // Termina o carregamento
        }
    };

    return {
        loading,
        error,
        sendRequest
    };
};

export default useHttp;