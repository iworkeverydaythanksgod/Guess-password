const PasswordBox = document.getElementById("PasswordBox");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+|?<>~*-/ ";

const allChar = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  PasswordBox.value = password;
}

function copy() {
  PasswordBox.select();
  document.execCommand("copy");
}
