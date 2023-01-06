/***** Definindo altura e largura da aplicação *****/

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
  largura = window.innerWidth
  altura = window.innerHeight

  console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

/***** Criação de posições randômicas *****/

function posicaoRandomica() {

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90
  // decremento de 90px para que a imagem não estoure a dimensão do palco! 

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY
  // em caso da posição ser < 0, igualará a zero!

  console.log(posicaoX, posicaoY)

  // Criação do elemento HTML
  var mosquito = document.createElement('img')
  mosquito.src = './imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'

  document.body.appendChild(mosquito)
}


/***** Criação de tamanhos aleatorios de mosquito *****/

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)
  
  switch(classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}