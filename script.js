const turn = document.querySelector('[data-turn]');
const boxes = Object.values(document.querySelectorAll('[data-box]'));

let move = "X";
let counter = 0;
let gameEnd = false;

const grid = document.querySelector('[data-grid]');
grid.addEventListener('click',(event)=>{if(boxes.includes(event.target))makeMove(event.target)});

function makeMove(box){
    if(box.innerHTML.length == 1 || gameEnd==true) return;
    
    box.innerHTML = move;
    box.classList.remove("cursor-pointer");
    counter++;

    checkGameOver();
}

function checkGameOver(){
    gameEnd = false;
    for(let x=0; x<9; x+=3){
        if(boxes[x].innerHTML==move && boxes[x+1].innerHTML==move &&  boxes[x+2].innerHTML==move){
            gameEnd = true;
            boxes[x].classList.add("bg-green-400");
            boxes[x+1].classList.add("bg-green-400");
            boxes[x+2].classList.add("bg-green-400");
        }
    }
    // check vertically.
    for(let x=0; x<3; x++){
        if(boxes[x].innerHTML==move && boxes[x+3].innerHTML==move &&  boxes[x+6].innerHTML==move){
            gameEnd = true;
            boxes[x].classList.add("bg-green-400");
            boxes[x+3].classList.add("bg-green-400");
            boxes[x+6].classList.add("bg-green-400");
        }
    }
    // check diagonally.
    if(boxes[0].innerHTML==move && boxes[4].innerHTML==move &&  boxes[8].innerHTML==move){
        gameEnd = true;
        boxes[0].classList.add("bg-green-400");
        boxes[4].classList.add("bg-green-400");
        boxes[8].classList.add("bg-green-400");
    }
    if(boxes[2].innerHTML==move && boxes[4].innerHTML==move &&  boxes[6].innerHTML==move){
        gameEnd = true;
        boxes[2].classList.add("bg-green-400");
        boxes[4].classList.add("bg-green-400");
        boxes[6].classList.add("bg-green-400");
    }
    if(gameEnd==true){
        const newGameBtn = document.querySelector('[data-newGame]');
        newGameBtn.classList.remove("opacity-0");
        turn.innerHTML = "Winner Player - " + move;
        counter = 0;
        gameEnd = false;
    }
    else if(counter==9){
        const newGameBtn = document.querySelector('[data-newGame]');
        newGameBtn.classList.remove("opacity-0");
        turn.innerHTML = "Draw";
        counter = 0;
    }
    else{
        if(move == "X") move = "O";
        else move = "X";
        turn.innerHTML = "Current Player - " + move;
    }
}

function newGame(){
    const newGameBtn = document.querySelector('[data-newGame]');
    for(let x=0; x<9; x++){
        boxes[x].innerHTML = "";
        boxes[x].classList.remove("bg-green-400");
        boxes[x].classList.add("cursor-pointer");
    }

    newGameBtn.classList.add("opacity-0");
    turn.innerHTML = "Current Player - X";
    move = "X";
}