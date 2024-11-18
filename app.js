function criaCartao(categoria, pergunta, resposta) {
    let conteiner= document.getElementById('conteiner')
    let cartao= document.createElement('aeticle')
    cartao.className = 'cartao'

    cartao.innerHTML = `
     <div class="cartao__conteudo">
            <h3>Programação</h3>
            <div class="cartao__conteudo__pergunta">
                <p>  O que é JavaScript?<p> 
            </div>
            <div class="cartao__conteudo__resposta">
              <p>  O CSS é uma linguagem estilização.<p> 
            </div>
            </div>
    `
    cartao.appendChild(cartao)
}