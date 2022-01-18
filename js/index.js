let myMuseum = new Museum();
myMuseum.expositionGallery();

const cupList = myMuseum.getCups();

function showInfoByClickButtom() {
  alert(cupList[0].name + "\n" + cupList[0].description + "\n $" + cupList[0].value);
}

function resizeImage(image, size){
  image.style.height= size;
}

function textChange(mouse){
  
  if (mouse){
    document.getElementById("console").innerText = "¡You are inside!";
  } else{
    document.getElementById("console").innerText = "¡You are outside!";
  }
}

function showInfoByDbClick(){
  document.getElementById("champions").innerHTML = "The Chaaaaaaaampionss!";
}

function enterOneLetter() {
  alert("You pressed a key inside the input field");
}

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("showDate").innerHTML = Date();
}