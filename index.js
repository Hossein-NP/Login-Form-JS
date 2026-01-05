let leftEye = document.getElementById('left-eye');
let rightEye = document.getElementById('right-eye');
let username = document.getElementById('username');
let password = document.getElementById('password');

let leftEyeTop = 80;
let leftEyeLeft = 114;
let leftEyePaddingLeft = 0;
let leftEyePaddingTop = 0;


let rightEyeTop = 80;
let rightEyeLeft = 232;
let rightEyePaddingLeft = 0;
let rightEyePaddingTop = 0;

const userInputFocus = () => {
  console.log("user")
}
const userInputBlur = () => {
  console.log("user")
}
const userInputKeypress = () => {
  console.log("key")
}
const passwordInputFocus = () => {
  let eyePosition = setInterval(() => {
    if(leftEyeTop == 58) {
      clearInterval(eyePosition)
    }

    leftEye.style.top = leftEyeTop-- + 'px';
    leftEye.style.left = leftEyeLeft++ + 'px';
    rightEye.style.top = rightEyeTop-- + 'px';
    rightEye.style.left = rightEyeLeft-- + 'px';
    
  }, 20)
}
const passwordInputBlur = () => {
  console.log("user")
}
const passwordInputKeypress = () => {
  console.log("key")
}


username.addEventListener('focus', userInputFocus);
username.addEventListener('blur', userInputBlur);
username.addEventListener('keypress', userInputKeypress);

password.addEventListener('focus', passwordInputFocus);
password.addEventListener('blur', passwordInputBlur);
password.addEventListener('keypress', passwordInputKeypress);
