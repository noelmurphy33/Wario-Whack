$(document).ready(function () {
  //function to toggle to how to play div
  $("#howtobtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#mainscoreboard").hide("slow");
    $("#contact").hide("slow");
    $("#howtoplay").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to scoreboard div
  $("#scoreboardbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#contact").hide("slow");
    $("#mainscoreboard").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to contact
  $("#contactbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#contact").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to intro
  $("#introbtn").click(function () {
    $("#contact").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#intro").show("slow");
    $(this).addClass("active");
  });

  //gameplay
  const pipes = document.querySelectorAll(".pipe");
  const wario = document.querySelectorAll(".wario");
  const mario = document.querySelectorAll(".mario");
  const startGameBtn = document.querySelector(".startbtn");
  const displayTimeLeft = document.querySelector("#time");
  const displayScore = document.querySelector("#score");
  let lastPipe;
  let timeUp = false;
  let score = 0;
  let countDown 
  let timeLimit = 60000
  
  function selectRandomPipe(pipes) {
    const randomPipe = Math.floor(Math.random() * pipes.length);
    const pipe = pipes[randomPipe];
    if (pipe === lastPipe) {
      return selectRandomPipe(pipes);
    }
    lastPipe = pipe;
    return pipe;
  };
  console.log(selectRandomPipe(pipes))

  function jumpOut(){
    const jumpOutTime = Math.random() * 1200 + 600;
    const warioUp = selectRandomPipe(pipes);
    const marioUp = selectRandomPipe(pipes);
    warioUp.classList.add("wariojump");
    marioUp.classList.add("mariojump");
    setTimeout(function(){
        warioUp.classList.remove("wariojump");
        marioUp.classList.remove("mariojump");
    if(!timeUp) jumpOut();
    }, jumpOutTime);
   }
 function startGame(){
     countDown = 60;
     displayScore.textContent = 0;
     displayTimeLeft.textContent = countDown;
     timeUp = false;
     score = 0;
     jumpOut();
     startGameBtn.style.display = "none";
     setTimeout(function () {
        timeUp = true;       
      }, timeLimit);
 }
  




 startGameBtn.addEventListener('click', startGame)
});
