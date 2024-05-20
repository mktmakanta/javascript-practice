
// const number =document.querySelector(".number");
const input =  document.querySelector(".input");
const guessed =  document.querySelector(".guessed");
const massage =  document.querySelector(".massage");
const btn = document.querySelector('.search');
const restart = document.querySelector('.restart');
const turn = document.querySelector('.turn');
const paragraph = document.querySelector('.para');



turn.textContent = 10;


const randomNumber = Math.floor(Math.random()*100)
// number.innerHTML = randomNumber;
guessed.textContent = input.value;
console.log(randomNumber)

//functions
function onSubmit (){
  
  if(turn.textContent <= 1){
    massage.textContent = "failed";
    input.disabled = true;
    restart.style.display = "block";
    paragraph.textContent = "";
    turn.textContent = 0;
    input.disabled = true;  
    guessed.textContent += input.value
  
  }else{
    if(input.value == randomNumber){
        massage.textContent = "congratulations";
        input.disabled = true;
        restart.style.display = "block";
        paragraph.textContent = "";
        turn.textContent = '';
        
      }else{
        console.log(guessed.textContent += input.value);
        input.value = "";
        restart.style.display = "none";
        turn.textContent -= 1;
        if (input.value < randomNumber){
          paragraph.textContent = "Last guess was too low";
        }else{
          paragraph.textContent = "Last guess was too High";
        };
      };
  };
      // console.log(randomNumber)
  }
function onRestart (){
  input.value = "";
  input.disabled = false;
  guessed.textContent = "";
  massage.textContent = "";
  restart.style.display = "none";
  turn.textContent = 10;

}
btn.addEventListener("click", onSubmit)
restart.addEventListener("click", onRestart)


///END OF SECTION ONE