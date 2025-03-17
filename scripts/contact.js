


listaCanvas = document.querySelector('#canva-list')
listaLinhas = document.querySelector('#linhas-num')
textoLinhas = document.querySelector('#linhas-canva-num-p')
textArea = document.querySelector('#text-area-canvas')
areaForm = document.querySelector('#contato-form')




document.addEventListener("keydown", function (event) {
    const numeroLinhas = textArea.value.split('\n').length
    console.log(numeroLinhas)

   
        listaCanvas.innerHTML = ''
        for(c = 1; c <= numeroLinhas; c++){
            listaCanvas.innerHTML += `<li class="linhas-canva-num" id="#linhas-num">
                                <p class="num-canva" id="linhas-canva-num-p">${c}-</p>
                            </li>`
                
        }
    
    
 
    textArea.addEventListener("input",()=>{
        if(!textArea.value.split('\n')){
            textArea.value += "\n"
        }
    })



    if(document.activeElement === textArea){
        if(event.key === "Tab"){
            event.preventDefault()

            const cursorStart = textArea.selectionStart;
            const end = textArea.value;

            const tabEspacos = "   ";
            const valorAtual = textArea.value;

            textArea.value = valorAtual.substring(0,cursorStart)+tabEspacos+valorAtual.substring(end)

        }
    }
    


})

