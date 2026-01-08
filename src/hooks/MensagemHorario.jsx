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
        <>
            {hora.getHours() >= 6 && hora.getHours() <= 12 && <h1> Bom dia!</h1>}
            {hora.getHours() >= 13 && hora.getHours() <= 17 && <h1> Boa tarde!</h1>}
            {hora.getHours() >= 18 && hora.getHours() <= 23 && <h1> Boa noite!</h1>}
            {hora.getHours() >= 0 && hora.getHours() <= 5 && <h1> Boa madrugada!</h1>}
        </>
    )

}

export default MensagemHorario