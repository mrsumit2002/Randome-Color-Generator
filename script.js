const colorBox = document.querySelector(".color-box");
const colorCode = document.querySelector(".color-code");
// const getColor = () => {
//   const randomNumber = Math.floor(Math.random() * 1677215);
//   const randomCode = "#" + randomNumber.toString(16);
//   colorBox.style.backgroundColor = randomCode;
//   colorCode.innerText = randomCode;
//   console.log(randomCode);
// };
// document.getElementById("btn").addEventListener("click", getColor);
// // getColor();


const randomColorGenerator = ()=> {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomCode = `rgb(${red}, ${green}, ${blue})`  //rgb(255, 255, 255) for white
  return randomCode;
};

document.getElementById("btn").addEventListener('click',() =>{
  const randomCode = randomColorGenerator();
  colorCode.textContent = randomCode;
  colorBox.style.backgroundColor = randomCode;
})