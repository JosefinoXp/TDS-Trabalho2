import { useState, useEffect } from "react";

const FundoDinamico = () => {
    const [classeHorario, setClasseHorario] = useState('');

    useEffect(() => {
    const atualizarCorFundo = () => {
        const hora = new Date().getHours();

        if (hora >= 4 && hora <= 12) {
        setClasseHorario('bg-manha');
        } else if (hora >= 13 && hora <= 17) {
        setClasseHorario('bg-tarde');
        } else {
        setClasseHorario('bg-noite');
        }
    };

    atualizarCorFundo();
    const intervalo = setInterval(atualizarCorFundo, 60000);
    return () => clearInterval(intervalo);
  }, []);

  return classeHorario;
}

export default FundoDinamico