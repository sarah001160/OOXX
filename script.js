const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let circleTurn

startGame()

restartButton.addEventListener('click',startGame)

function startGame(){
    //從這邊開始繼續2021/8/1
    //https://www.youtube.com/watch?v=Y-GkMjUZsmM
    //31:06秒開始閱讀
    circleTurn= false
    cellElements.forEach(cell =>{
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click',handleClick,{once:true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS: X_CLASS;
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){//若true就win了
        console.log('winner'); 
        endGame(false)  
       }else if(isDraw()) {
        endGame(true) 
       } else{
        swapTurns()//換邊
        setBoardHoverClass() //灰色顯示
       }   
}

function endGame(draw){//結束遊戲
    if(draw){//是平局
        winningMessageTextElement.innerText = "Draw!"
    }else{//false的話,表示有一方贏了
        winningMessageTextElement.innerText =`${circleTurn ? "O's" :"X's"} Wins!`
    }
    winningMessageElement.classList.add('show')//顯示文字
}

function isDraw() {//是平局
   return [...cellElements].every(cell=>{
       return cell.classList.contains(X_CLASS)||cell.classList.contains(CIRCLE_CLASS)
   })
}


function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
     circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS) //移除要寫在第一順位,之後應用完畢時才會第一項移除,於是可以重複使用
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){//若是True
        //顯示圈圈
        board.classList.add(CIRCLE_CLASS);
    }else{//若是false,顯示叉叉
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination =>{
        return combination.every(index=>{
           return cellElements[index].classList.contains(currentClass);
       })
     })
}



