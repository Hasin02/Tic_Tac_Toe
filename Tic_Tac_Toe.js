// let str = "HasinJavaid";
// console.log(str[0]);
// tempelate literals -> string interpolation
//escape charater \n \t .... -> len as single character
//isFollow - camel case
// is_follow - snake case
// is-follow - kebab case
// IsFollow - pascal case
// {} -> block 
// ECMA SCRIPT 6

let boxes = document.querySelectorAll(".Box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg")
let msg = document.querySelector("#msg")
let turnO = true;

const resetGame = ()=>{
    turn0 = true;
    enaB();
    msgContainer.classList.add("hide")
}

const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box) => {
    box.addEventListener("click",() =>
    {
        if(turnO)
        {   
            box.innerText ="X";
            box.classList.add("x");
            turnO = false;
        }
        else
        {
            box.innerText ="O";
            box.classList.add("o");
            turnO = true;
        }
        box.disabled = true;
        checkWinner ();
        

    })
});

const enaB = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner) =>
    {
        msg.innerText=`Congrates ${winner}`;
        msgContainer.classList.remove("hide");
        disB();
    } 
const disB = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const checkWinner = () =>
{
    for (let pattern of win)
    {
        
        let pos = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
    
    if(pos != "" && pos1 != "" && pos2 != "")
    {
        if(pos === pos1 && pos1 ===pos2)
        {
            showWinner(pos);
            
        }
    }
}
}

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);