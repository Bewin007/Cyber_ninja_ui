const openBtn = document.getElementById('opneBtn')
const shell = require('electron').shell

openBtn.addEventListener('click',function(event){
  shell.openExternal("C:\\Users\\Asus\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe")
})

