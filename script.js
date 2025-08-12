let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgg = document.querySelector("#msg");
const myScore = document.querySelector("#userscore");
const yourScore = document.querySelector("#compscore");
const msgContainer = document.querySelector(".msg-container");

const draw = () => {
    console.log("game was draw");
     msgg.innerText = "Game was draw";
     msgContainer.style.backgroundColor = "brown";
}


const showWinner = (userWin) =>{
    if(userWin){
        console.log("you are Winner");
        msgg.innerText = "You Win!";
        msgContainer.style.backgroundColor = "green";
        
            userScore++;
            myScore.innerText = userScore;

        
    }else{
        console.log("you are looser");
         msgg.innerText ="You lost!";
         msgContainer.style.backgroundColor = "red";
         compScore++;
          yourScore.innerText = compScore;
    }
}
const genComchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice)

    const compChoice = genComchoice();
    console.log("comp choice =", compChoice)

    if (userChoice === compChoice) {
        draw();
    }else{
        let userWin = true;

        if(userChoice=== "rock"){
           userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }
        else
            {
            userWin =compChoice === "rock"? false:true;
        }

        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    // console.log(choices)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})