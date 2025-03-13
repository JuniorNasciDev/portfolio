const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    effect:'cube',
    loop: true, // Loop infinito
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
btn2 = document.querySelector("#img-project-2");
btn3 = document.querySelector("#img-project-3");
btn4 = document.querySelector("#img-project-4");
btn5 = document.querySelector("#img-project-5");
//Pagina Back
btn1S = document.querySelector("#img-project-s1");
btn2S = document.querySelector("#img-project-s2");
btn3S = document.querySelector("#img-project-s3");
btn4S = document.querySelector("#img-project-s4");
btn5S = document.querySelector("#img-project-s5");
//Titulo projeto
textoProjeto = document.querySelector('#titulo-projeto')



indice = 0;
projetos = ['Dragon ball Z','Steach Lilo','terceiro anime']

textoProjeto.innerText = projetos[indice]

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
    }
  })
}

function adicionaProjeto(){
  // <- puxando para a direita : 1-0 - 0-0 
  // -> puxando para a esquerda : 1-1 - 0-1
  let direcao
  if(swiper.activeIndex == 0){
    direcao = 'esquerda'
  }else if(swiper.activeIndex == 1){
    direcao = 'direita'
  }
  console.log(direcao)

  if(direcao == 'direita'){
    indice ++
  }else{
    indice --
  }
  textoProjeto.innerText = projetos[indice]
}


trocaImagem()
