import { useState } from "react"

const ContatoPage = () => {
    const [inputs, setInputs] = useState({})

    return (
        <div>
            <h1> Entre em contato! </h1>

            <p>Gostou do que viu? Adoraríamos conversar com você e eternizar seus momentos.</p>
            <p>Para um contato rápido ou para tirar dúvidas, sinta-se à vontade para nos enviar uma mensagem pelo celular: +55 (45) 9999-9999.</p>
            <p>Se preferir, preencha o formulário abaixo com os detalhes do que você precisa e retornaremos o mais breve possível!</p>
        
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nome</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                    <label class="form-label">Pacotes</label>
                <div>

                <div>
                    <div>
                        <label class="form-label">Ensaio Pessoal</label>
                        <input type="checkbox" id="pacote1" checked={inputs.pacote1}/>
                    </div>
                    <div>
                        <label class="form-label">Ensaio Estúdio</label>
                        <input type="checkbox" id="pacote2" checked={inputs.pacote2}/>
                    </div>
                    <div>
                        <label class="form-label">Ensaio Corporativo</label>
                        <input type="checkbox" id="pacote3" checked={inputs.pacote2}/>
                    </div>
                </div>

                </div>

                <p> OPCIONAL: Seria de bom grado mandar em PDF as imagens de referências para a equipe!</p>

                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContatoPage