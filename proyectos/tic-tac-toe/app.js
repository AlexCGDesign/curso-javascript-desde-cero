const gameBoard = document.querySelector(".game__board");
const messagePlayer = document.querySelector(".game__turn");
const endGameResult = document.querySelector(".endgame__result");
const endGameContainer = document.querySelector(".endgame");
const resetGameButton = document.querySelector(".endgame__button");

const winningPosition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const players = {
    x: "cross",  
    o: "circle"  
}


let isTurnX = true;
let currentTurns = 0;
let maxTurns = 9;

// Se inicia el juego cuando se carga el HTML
document.addEventListener("DOMContentLoaded", function(){
    startGame();
});

resetGameButton.addEventListener("click", startGame);


// Funcion que empieza el juego
function startGame(){
    createBoard();

    messagePlayer.textContent = "X";

    isTurnX = true;
    currentTurns = 0;

    gameBoard.classList.remove("disabled");
    endGameContainer.classList.remove("show");
}

// Funcion que crea el tablero
function createBoard(){
    const cells = 9;

    while(gameBoard.firstElementChild){
        gameBoard.firstElementChild.remove();
    }

    for(let i = 0; i < cells; i++){
        const div = document.createElement("div");
        div.classList.add("cell");

        div.addEventListener("click", handleCell, {
            once: true
        });

        gameBoard.append(div);
    }

}

// Controla el uso de las celdas
function handleCell(e){
    const currentCell = e.currentTarget;
    const currentPlayer = isTurnX ? players.x : players.o;
    currentTurns++;

    drawShape(currentCell, currentPlayer);

    // Verificamos si hay un ganador
    if(checkWinner(currentPlayer)){
        return;
    }

    // Verificamos si hemos empatado
    if(currentTurns === maxTurns){
        showEndGame(false);
    }


    // Cambie de turno
    changeTurn();
}

// Dibuja una X o un O
function drawShape(element, shape){
    element.classList.add(shape);
}

// Cambia el turno actual
function changeTurn(){
    isTurnX = !isTurnX;
    messagePlayer.textContent = isTurnX ? "X" : "O";
}

// Verificar si hay un ganador 
function checkWinner(currentPlayer){
    const cells = document.querySelectorAll(".cell");

    const winner = winningPosition.some(function(winningArray){

        return winningArray.every(function(position){
        
            return cells[position].classList.contains(currentPlayer);

        });

    });

    if(!winner){
        return undefined;
    }

    showEndGame(winner);
    return true;
}

function showEndGame(winner){

    gameBoard.classList.add("disabled");
    endGameContainer.classList.add("show");

    if(winner){
        endGameResult.textContent = `🔥 ¡${isTurnX ? "X" : "O"} ha ganado el juego!`;
    }else{
        endGameResult.textContent = `😲 ¡El juego se ha empatado!`;
    }

}