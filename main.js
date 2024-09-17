//Funcoes
function mover(){

    //Variaveis Locais
    let bob = document.querySelector("#bob");
    let w = window.innerWidth;
    let h = window.innerHeight;
    let random_x = sorteia(0, w - bob.offsetWidth);
    let random_y = sorteia(0, h - bob.offsetHeight);

    //Executar
    bob.style.left = `${random_x}px`;
    bob.style.top = `${random_y}px`;
}

function sorteia(min, max){
    let resultado = Math.floor(Math.random() * (max + 1 - min)) + min;
    return resultado;
}