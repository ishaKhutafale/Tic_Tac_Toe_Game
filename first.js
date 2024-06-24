let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
disabledBoxes();
let p1;
let p2;
let setNames=(person1,person2)=>{
    p1=person1;
    p2=person2;
}

let turn0=true; // player x,player 0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
let win=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
            count++;
        }
        else{
            box.innerText="X";
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkWinner();
        if (win!=true && count === 9) {
            msg.innerText = `Draw!!`;
            msgContainer.classList.remove("hide");
        }
    });
});
const resetGame=()=>{
    turn0=true;
    win=false;
    count=0;
    enabledBoxes();
    msgContainer.classList.add("hide");
    let person1=prompt("Enter Player 1 name");
    let person2=prompt("Enter Player 2 name");
    setNames(person1,person2);
};

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    disabledBoxes();
    win=true;
    msg.innerText=`Congratulations Winner is ${winner} !!`;
    msgContainer.classList.remove("hide");

};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val !="" && pos3Val != "")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                if(pos1Val==="O") showWinner(p1);
                else  showWinner(p2);    
            }
           
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);