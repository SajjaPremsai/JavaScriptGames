const ComputerDisplay = document.getElementById("computerchoice")
const UserDisplay = document.getElementById("userchoice")
const ResultDisplay = document.getElementById("Results")
const image = document.getElementById("Status")




const choices = document.querySelectorAll("button")

let computerchoice 
let userchoice 

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        userchoice = e.target.id
        UserDisplay.innerHTML = userchoice
        GenerateComputerChoice()
        GenerateResult()
    })
})

function GenerateComputerChoice(){
    const compchoice = Math.floor(Math.random() * 3)
    compchoice === 1 ? computerchoice = "Rock" 
    : compchoice === 2 ? computerchoice = "Paper" 
    : computerchoice = "Scissors"
    ComputerDisplay.innerHTML = computerchoice 
}


function GenerateResult(){
    if(userchoice === computerchoice){
        ResultDisplay.innerHTML = "Draw"
        image.src = "https://media1.tenor.com/m/ItjSOKnVjYkAAAAC/win-%E5%8B%9D%E3%81%A1.gif"
    }
    if(userchoice == "Rock" && computerchoice == "Paper"){
        ResultDisplay.innerHTML = "Computer Won"
        image.src = "https://media1.tenor.com/m/LRKlbuGlNbEAAAAC/lose-%E8%B2%A0%E3%81%91.gif"
    }
    if (userchoice == "Rock" && computerchoice == "Scissors") {
        ResultDisplay.innerHTML = "You Won"
        image.src = "https://media1.tenor.com/m/ItjSOKnVjYkAAAAC/win-%E5%8B%9D%E3%81%A1.gif"
    }
    if(userchoice == "Paper" && computerchoice == "Scissors"){
        ResultDisplay.innerHTML = "Computer Won"
        image.src = "https://media1.tenor.com/m/LRKlbuGlNbEAAAAC/lose-%E8%B2%A0%E3%81%91.gif"
    }
    if (userchoice == "Paper" && computerchoice == "Rock") {
        ResultDisplay.innerHTML = "You Won"
        image.src = "https://media1.tenor.com/m/ItjSOKnVjYkAAAAC/win-%E5%8B%9D%E3%81%A1.gif"
    }
    if(userchoice == "Scissors" && computerchoice == "Rock"){
        ResultDisplay.innerHTML = "Computer Won"
        image.src = "https://media1.tenor.com/m/LRKlbuGlNbEAAAAC/lose-%E8%B2%A0%E3%81%91.gif"
    }
    if (userchoice == "Scissors" && computerchoice == "Paper") {
        ResultDisplay.innerHTML = "You Won"
        image.src = "https://media1.tenor.com/m/ItjSOKnVjYkAAAAC/win-%E5%8B%9D%E3%81%A1.gif"
    }
} 