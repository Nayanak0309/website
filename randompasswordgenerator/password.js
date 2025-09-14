const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copybutton = document.getElementById("Copy");
const generatepassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let password = ""
  const lenthofpassword = 8;
    for (let i = 0; i <= lenthofpassword; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
       // console.log(password);
         passwordBox.value = password;
};
button.addEventListener("click", generatepassword);
copybutton.addEventListener("click", () => {
  const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy) {
        alert("No password to copy");
        return;
    }
    navigator.clipboard.writeText(passwordCopy);
    alert("Password copied to clipboard");  
    
    
});