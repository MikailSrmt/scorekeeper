var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1s = document.querySelector("#p1s");
var p2s = document.querySelector("#p2s");
var rBtn = document.querySelector("#reset ");
var numInput = document.querySelector("input");
var maxScore = document.querySelector("#maxScore");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;



p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1score += 1;
        //console.log(p1score, winningScore);
        if(p1score === winningScore){
            p1s.classList.add("winner");
            gameOver = true; 
        }
        p1s.textContent = p1score;
    }
})

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2score += 1;
        if(p2score === winningScore){
            p2s.classList.add("winner");
            gameOver = true; 
        }
        p2s.textContent = p2score;
    }
})


rBtn.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change",function(){
    maxScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});


function reset(){
 p1s.textContent = 0;
    p2s.textContent = 0;
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1s.classList.remove("winner");
    p2s.classList.remove("winner");   
}