function result (num1,num2,num3)
{
    document.getElementById(`item${num1}`).style.backgroundColor = 'var(--onclickColor)'
    document.getElementById(`item${num2}`).style.backgroundColor = 'var(--onclickColor)'
    document.getElementById(`item${num3}`).style.backgroundColor = 'var(--onclickColor)'
    // document.getElementById(`item${num3}`).style.transition = '0.4s !important'

    headXO.innerHTML = allSquaresArray[num1]
    
    gameWord.innerHTML = "is winner" 
    allSquares.forEach(e => {
        e.style.pointerEvents = 'none'
    })
    document.getElementById("win").play()
}











let headXO = document.querySelector(".game-container .head span")
let btn = document.querySelector(".start")
let turn = 'X';
let gameWord = document.querySelector(".game-container .head p")
let allSquares = document.querySelectorAll(".blocks .square")
let allSquaresArray = []
let resetBtn = document.querySelector('.reset')


function winner ()
{ 
   for(let i=1 ;i<=9;i++)
   {
    allSquaresArray[i] = document.getElementById(`item` + i).innerHTML;
   }
   if( allSquaresArray[1] ==  allSquaresArray[2] && allSquaresArray[2] ==allSquaresArray[3] &&allSquaresArray[1] !== '')
   {
   result(1,2,3)
   }else if( allSquaresArray[4] ==  allSquaresArray[5] && allSquaresArray[5] ==allSquaresArray[6] &&allSquaresArray[4] !== '')
   {
   result(4,5,6)
   }else if( allSquaresArray[7] ==  allSquaresArray[8] && allSquaresArray[8] ==allSquaresArray[9] &&allSquaresArray[7] !== '')
   {
   result(7,8,9)
   }else if( allSquaresArray[1] ==  allSquaresArray[4] && allSquaresArray[4] ==allSquaresArray[7] &&allSquaresArray[1] !== '')
   {
   result(1,4,7)
   }else if( allSquaresArray[1] ==  allSquaresArray[5] && allSquaresArray[5] ==allSquaresArray[9] &&allSquaresArray[1] !== '')
   {
   result(1,5,9)
   }else if( allSquaresArray[2] ==  allSquaresArray[5] && allSquaresArray[5] ==allSquaresArray[8] &&allSquaresArray[2] !== '')
   {
   result(2,5,8)
   }else if( allSquaresArray[3] ==  allSquaresArray[6] && allSquaresArray[6] ==allSquaresArray[9] &&allSquaresArray[3] !== '')
   {
   result(3,6,9)
   }else if( allSquaresArray[3] ==  allSquaresArray[5] && allSquaresArray[5] ==allSquaresArray[7] &&allSquaresArray[3] !== '')
   {
   result(3,5,7)
   }
}

console.log()
let myImage = document.querySelector("img")


btn.onclick = function()
{
    myImage.style.width = "0"
    myImage.style.height = "0"
    headXO.innerHTML = turn 
    gameWord.innerHTML="turn"
    btn.style.transform = 'translateY(2px)';
    allSquares.forEach(e =>{
        e.style.transform = 'translate(0 , 0) '
        
        })
        btn.style.display = 'none'
        resetBtn.style.display = 'block'
        document.getElementById("start").play()
}
///////////////////////////////////////////////
resetBtn.onclick = function()
{
    allSquares.forEach(e =>{
        e.innerHTML = ''
        e.style.backgroundColor =  'var(--blocksBackground)'
        headXO.innerHTML = turn
        gameWord.innerHTML = "turn"
        e.style.pointerEvents = 'auto'
        })
}
///////////////////////////////////////////

         function game(id){
        let myBox = document.querySelector(`.blocks #${id}`)
         if(turn=='X' && myBox.innerHTML=='')
        {
            myBox.innerHTML = 'X'
            turn = 'O'
            headXO.innerText = turn
            document.getElementById("x").play()
        }
        if(turn=='O' && myBox.innerHTML=='')
        {
            myBox.innerHTML = 'O'
            turn = 'X'
            headXO.innerText = turn
            document.getElementById("o").play()
        }

        winner();
    
    }
// // ressult

// //////////

// ///////////

// for(i = 0 ; i <= 2 ;i++ )
// {
//     for(j = 0; j<=2 ; j++) 
//     {
//         if(i==j){
//        if ((myArray[0][0].innerHTML === myArray[1][1].innerHTML) && (myArray[1][1].innerHTML === myArray[2][2].innerHTML) && (myArray[1][1].innerHTML !== ''))
//        {
//         console.log("true")
//        }}
       
//     }
// }


