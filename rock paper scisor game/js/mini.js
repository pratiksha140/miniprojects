 let userCount =  0;
 let compCount = 0;

  const containers = document.querySelectorAll(".container");
   const msgBtn = document.querySelector("#btn");
   const userScore = document.querySelector("#user-count");
   const compScore = document.querySelector("#comp-count")


 const getCompCont = () =>{
	const options= ["rock" , "paper", "scissors"];
	 const randIdx = Math.floor(Math.random()* 3);
	 return options[randIdx];
}

const drawGame = () => {
   console.log("game was Draw");
   btn.innerText = "your game was draw, play again!";
   btn.style.backgroundColor ="black";
}


const showWinner = (userWin, userCont, compCont) => {
      if(userWin) {
      console.log("you win");
      userCount++;
      userScore.innerText = userCount;
      btn.innerText = `you win!, your ${userCont} beats ${compCont}`;
      btn.style.backgroundColor = "green";

   }else{
      console.log("you lose");
      compCount++;
      compScore.innerText = compCount;
      btn.innerText = `you lose! ${compCont} beats your ${userCont}`;
      btn.style.backgroundColor ="red";
   }   
}


   const playGame = (userCont) => {
        console.log("user choice=" , userCont);
        const compCont = getCompCont();
        console.log("comp choice=" , compCont);

      if(userCont === compCont){
       drawGame();  
      } else{ 
         let userWin= true;
         if(userCont === "rock") {
          userWin = compCont === "paper" ? false : true;
         }else if(userCont === "paper"){
          userWin = compCont === "scissors" ? false : true;
         }else{
           userWin = compCont === "rock" ? false : true ;
       }
       showWinner(userWin, userCont, compCont);
       }
    };


  containers.forEach((container) => {
  	container.addEventListener("click", () => {
  		let userCont = container.getAttribute("id");
        playGame(userCont);
  	})
  });


  