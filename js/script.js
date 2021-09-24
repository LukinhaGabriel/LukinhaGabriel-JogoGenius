let order = []; 
let clickedOrder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow'); 
const green = document.querySelector('.green');



//Cria ordem aleatoria de cores  
let shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 4) //Quarda um número aleatorio a cada rodada
    order[order.length] = randomNumber;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        
        element.classList.add('selected');
        

    }, number - 250); 
    setTimeout(() => {
        
        element.classList.remove('selected');

    },); 
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(` Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
    
}

//Função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

//funcao para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();

}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação ${score}! \n Game Over \n Click em Ok para reiniciar o jogo`);
    order = [];
    clickedOrder = [];
    
    playGame();
} 


//funcao de inicio do jogo
let playGame = () => {
    alert("Bem Vindo ao Joguinho \n Click em ok para iniciar");
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();