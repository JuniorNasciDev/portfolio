const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    effect:'cube',
    on: {
      slideChange: function () {
        // A cada mudança de slide, obter o ID do slide ativo
        const activeSlide = swiper.slides[swiper.activeIndex]; // Acessa o slide ativo
        const slideId = activeSlide.id; // Obtém o ID do slide
        console.log("ID do slide ativo: ", slideId);
        trocaNome(slideId)
      }
    },
    loop: false, // Loop infinito
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
btn1H = document.querySelector('#img-project-h1')

//Titulo projeto
textoProjeto = document.querySelector('.tecnologia-titulo')



//Criação das variaveis listas projetos ------------------
let listaProjeto = [
  {
    nome:'Dragon ball Zes',
    tec:['html','css','javascript'],
    id:'Dbz1'
  }, {
    nome:'steach',
    tec:['html','javascript'],
    id:'Stch1'
  },
  {
    nome:'carros',
    tec:['html','css','javascript'],
    id:'Carros1'
  },
  {
    nome:'bozo',
    tec:['html','css','javascript'],
    id:'Bozo'
  },
]
textoProjeto.innerText = listaProjeto[0]

// criação da lista html
listahtml = document.querySelectorAll('.swiper-slide')

let c = 0

for(let c = 0; c < listahtml.length;c++){
  listahtml[c].id = listaProjeto[c].id
  console.log(listahtml[c].id)
}

document.querySelector('.tecnologia-titulo').innerText = listaProjeto[0].nome



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
    }else if(event.target.id == 'img-project-s1'){
      alert('St1')
    }else if (event.target.id == 'img-project-s2' ||
      event.target.id == 'img-project-s3' ||
      event.target.id == 'img-project-s4' ||
      event.target.id == 'img-project-s5'){
        salva = `${btn1S.src}`
        btn1S.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    }else if(event.target.id == 'img-project-t1'){
      alert('St1')
    }else if (event.target.id == 'img-project-t2' ||
      event.target.id == 'img-project-t3' ||
      event.target.id == 'img-project-t4' ||
      event.target.id == 'img-project-t5'){
        salva = `${btn1T.src}`
        btn1T.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    }else if(event.target.id == 'img-project-h1'){
      alert('St1')
    }else if (event.target.id == 'img-project-h2' ||
      event.target.id == 'img-project-h3' ||
      event.target.id == 'img-project-h4' ||
      event.target.id == 'img-project-h5'){
        salva = `${btn1H.src}`
        btn1H.src = `${event.target.src}`
        document.querySelector(`#${event.target.id}`).src = salva
    }
  })
}



function trocaNome(id){
  for(projeto in listaProjeto){
    if(listaProjeto[projeto].id == id){
      document.querySelector('.tecnologia-titulo').innerText = listaProjeto[projeto].nome
      document.querySelector('.project-box-technology').innerHTML = ''
      for (tecnologia in listaProjeto[projeto].tec){
        if(listaProjeto[projeto].tec[tecnologia] == 'html'){
          document.querySelector('.project-box-technology').innerHTML +=   `
          <li class="technology-item">
          <img class="icon-technology" src="images/icons/html-5.png" alt="">
          </li>
          `
        }else if(listaProjeto[projeto].tec[tecnologia] == 'css'){
          document.querySelector('.project-box-technology').innerHTML +=   `
          <li class="technology-item">
          <img class="icon-technology" src="images/icons/css-3.png" alt="">
          </li>
          `
        }else if(listaProjeto[projeto].tec[tecnologia] == 'javascript'){
          document.querySelector('.project-box-technology').innerHTML +=   `
          <li class="technology-item">
          <img class="icon-technology" src="images/icons/script-java.png" alt="">
          </li>
          `
        }
      }
    }
  }
 
}






trocaImagem()