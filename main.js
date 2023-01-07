/***** Definindo altura e largura da aplicação *****/

var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
  largura = window.innerWidth
  altura = window.innerHeight

  console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

/***** Criação de posições randômicas *****/

function posicaoRandomica() {

  //remover o mosquito anterior (caso exista)
  if(document.getElementById('mosquito')) {
  document.getElementById('mosquito').remove()

    // controle dos pontos de vida
    if (vidas > 3) {
      alert('Game Over!!!')
    } else {
      document.getElementById('v' + vidas).src="./imagens/coracao_vazio.png"
      vidas++
    }
  }
  
  // decremento de 90px para que a imagem não estoure a dimensão do palco:
  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  // em caso da posição ser < 0, igualará a zero:
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  // Criação do elemento HTML
  var mosquito = document.createElement('img')
  mosquito.src = './imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  // incluindo o elemento onclick sobre o mosquito
  mosquito.onclick = function(){
    this.remove()
  }

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

/***** Alterando a orientação da imagem de modo aleatorio *****/

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)
  
  switch(classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}