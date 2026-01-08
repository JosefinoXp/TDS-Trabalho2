import { useEffect, useState } from "react";

const MensagemHorario = () => {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {hora.getHours() >= 4 && hora.getHours() <= 12 && <h1> Bom dia!</h1>}
            {hora.getHours() >= 13 && hora.getHours() <= 17 && <h1> Boa tarde!</h1>}
            {hora.getHours() >= 18 && hora.getHours() <= 3 && <h1> Boa noite!</h1>}
        </div>
    )

}

export default MensagemHorario