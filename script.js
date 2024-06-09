   let nave = window.document.getElementsByTagName('nav')[0]
function clicar(){
 
    if(nave.style.display === 'none' || nave.style.display === ''){
        nave.style.display = 'block'
        
    }else{
        nave.style.display = 'none'
    }
}
function bot() {
    let gmail = window.document.getElementById('gmail')
    let senha = window.document.getElementById('senha')
    gmail.style.outline = 'none'
    senha.style.outline = 'none'
}
function mudouTamanho() {
    if(window.innerWidth >= 768){
        nave.style.display = 'block'
    }else{
        nave.style.display = 'none'
    }
}
