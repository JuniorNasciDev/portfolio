const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    effect:'cube',
    loop: false, // Loop infinito
    on: {
      slideChangeTransitionStart: function () {
        adicionaProjeto();}
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  



  // nessa parte eu crio as funções de troca de imagens para conseguir
//Pagina frontal
btn1 = document.querySelector("#img-project-1");
btn1S = document.querySelector("#img-project-s1");
btn1T = document.querySelector("#img-project-t1");

//Titulo projeto
textoProjeto = document.querySelector('#titulo-projeto')


//Criação das variaveis 

let esquerda = -1
let agora = 0
let direita = 1
let listaProjeto = ['dragon ball','stich','Carros','It a Coisa']
textoProjeto.innerText = listaProjeto[0]

// esquerda





function trocaImagem(){
  document.addEventListener('click',(event)=>{
    if(event.target.id == 'img-project-1'){
      alert('dbz1')
    }else if (event.target.id == 'img-project-2' ||
      event.target.id == 'img-project-3' ||
      event.target.id == 'img-project-4' ||
      event.target.id == 'img-project-5'){
        salva = `${btn1.src}`
        btn1.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    } else if(event.target.id == 'img-project-s1'){
      alert('St1')
    }else if (event.target.id == 'img-project-s2' ||
      event.target.id == 'img-project-s3' ||
      event.target.id == 'img-project-s4' ||
      event.target.id == 'img-project-s5'){
        salva = `${btn1S.src}`
        btn1S.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    } else if(event.target.id == 'img-project-t1'){
      alert('St1')
    }else if (event.target.id == 'img-project-t2' ||
      event.target.id == 'img-project-t3' ||
      event.target.id == 'img-project-t4' ||
      event.target.id == 'img-project-t5'){
        salva = `${btn1T.src}`
        btn1T.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    }
  })
}

function adicionaProjeto(){
  // <- puxando para a direita : 1-0 - 0-0 
  // -> puxando para a esquerda : 1-1 - 0-1
let direcao;
let indiceAnterior = swiper.previousIndex; // Pegando o índice anterior do Swiper
let indiceAtual = swiper.activeIndex; // Pegando o índice atual

if (indiceAtual > indiceAnterior) {
  direcao = "direita";
} else if (indiceAtual < indiceAnterior) {
  direcao = "esquerda";
}

if (direcao === "direita") {
  if(direita >= listaProjeto.length){
    direita = 0
  }
  agora = direita
  direita = agora + 1
  esquerda = agora - 1
  console.log('direita ->')
  console.log(esquerda,agora,direita)

} else if (direcao === "esquerda") {
  if(esquerda < 0){
    esquerda = listaProjeto.length-1
  }
    agora = esquerda
    esquerda = agora-1
    direita = agora+1
    console.log('<- esquerda')
    console.log(esquerda,agora,direita)
  }
  textoProjeto.innerText = listaProjeto[agora]
}


trocaImagem()
