// caching the dom
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissor_button = document.getElementById("s");

main();

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
} 
function lose(userChoice,computerChoice){
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`
}
function draw(userChoice,computerChoice){
  result_p.innerHTML = "It's a draw"
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  if(letter === "s") return "Scissor";
}

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs": case "pr": case "sp":
      win(userChoice, computerChoice);
    break;

    case "sr": case "rp" : case "ps":
      lose(userChoice, computerChoice);
    break;

    case "rr": case "pp" : case "ss":
      draw(userChoice, computerChoice);
    break;
  }
}

function main(){
  rock_button.addEventListener('click', function(){
    game("r");
  })
  paper_button.addEventListener('click', function(){
    game("p");
  })
  scissor_button.addEventListener('click', function(){
    game("s");
  })
}
