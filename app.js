function criaCartao(categoria, pergunta, resposta) {
    let conteiner= document.getElementById('conteiner')
    let cartao= document.createElement('aeticle')
    cartao.className = 'cartao'

    cartao.innerHTML = `
     <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}<p> 
            </div>
            <div class="cartao__conteudo__resposta">
              <p>${resposta}<p> 
            </div>
            </div>
    `
    let respostaEstaVisil = false


    function viraCartao (){
        respostaEstaVisil = !respostaEstaVisil
        cartao.classList.toggle('active', respostaEstaVisivel)

        cartao.addEventListener('click', viraCartao)
    }

    container.appendChild(cartao) 
}