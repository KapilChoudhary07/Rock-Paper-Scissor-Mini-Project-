let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

    const gencompChoice = () => {

        const option = ["rock" , "paper" , "scissor"]
        const randIdx = Math.floor(Math.random() * 3);
        return option[randIdx];
    }

    const showWinner = (userWin) => {
        if(userWin){
        console.log("YOU WIN!")
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    }else{
         console.log("You LOSS!")
          msg.innerText = "You loss";
                msg.style.backgroundColor = "red";
    }
};

    const drawGame = () => {

        console.log("game was draw");
         msg.innerText = "Message was draw.Play again";
               msg.style.backgroundColor = "white";
    }
const playGame = (userchoice) => {

    console.log("user choice = ",userchoice);
    const compChoice = gencompChoice();
    console.log("comp Choice = ",compChoice);

if(userchoice === compChoice){

    drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userWin === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{

            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {

    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id")
        console.log("choices was clicked",userchoice);
        playGame(userchoice)

    });
});

