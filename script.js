const generateBtn = document.getElementById("Random-btn");
const generateNumber = document.getElementById("Random-number");

generateBtn.addEventListener("click", ()=>{
  const randomNumber = Math.floor(Math.random()*100 )+1;
  generateNumber.textContent = randomNumber;
                             
})