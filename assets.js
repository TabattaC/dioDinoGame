const dino = document.querySelector(".dino");
const background= document.querySelector(".background")
let isJumping = false
let position = 0 

handleKeyUp = (event) => {
    if(event.keyCode === 32){
        if (!isJumping) {
            jump()
        }
    }
}

jump= () => {
/* Posição inicial do dino ( sempre vai começar em baixo)  */
    isJumping = true
    let upInterval = setInterval(()=>{
/* Para definir intervalo: Esse codigo será executado a cada 20ms */
/* Descendo */
        if (position >= 150){ 
            clearInterval(upInterval)
 
        let downInterval = setInterval(()=>{
            if (position<=0){
                clearInterval(downInterval)
                isJumping = false
            }else{
                position -= 20;
                dino.style.bottom = position + "px";
            }     
        },20)
    } else {
/* Subindo */
        position += 20;
        dino.style.bottom = position + "px";
        }   
    }, 20);
}

createCactus= () => {
    const cactus = document.createElement ("div");
    let cactusPosition = 1000
    let randomTime = Math.random() * 6000;

    cactus.classList.add ("cactus");
    background.appendChild(cactus)
    cactus.style.left = cactusPosition + "px"

    let leftTimer = setInterval (()=>{

        if (cactusPosition <- 60 ) {
            /*  Saiu da tela */
            clearInterval(leftTimer)
            background.removeChild(cactus)
        } else if(cactusPosition> 0 && cactusPosition < 60 && position <60){
            /* Game over */
            clearInterval(leftTimer)
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactusPosition -= 10
            cactus.style.left =cactusPosition + "px"
        }
    },20)
    setTimeout(createCactus, randomTime)/* Recursividade, uma função dentro dela chamando ela mesma */
}

createCactus();

document.addEventListener("keyup", handleKeyUp);
/* O event vai ser enviado para a função toda vez que uma tecla for pressionada no navegador */

