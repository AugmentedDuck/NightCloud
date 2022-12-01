const photoList = [];
const nrOfElements = 35
const currentComp = [0, 0]
let leftButton;
let rightButton;

for (let i = 0; i < nrOfElements; i++){
  photoList[i] = i
}

function chooseLeft(){
  nextComp(currentComp[0], currentComp[1], "left")
}

function chooseRight(){
  nextComp(currentComp[0], currentComp[1], "right")
}

function nextComp(i, j, leftOrRight){
  let isDone = false

  if (i < nrOfElements - 1 && j < nrOfElements - 1) {
    if (leftOrRight == "right"){
      if (currentComp[0] < currentComp[1]) {
        i = j + 1
      } else {
        i++
      }
    } else {
      if (currentComp[0] > currentComp[1]) {
        j = i + 1
      } else {
        j++
      }
    }
  } else {
    isDone = true
  }

  currentComp[0] = i
  currentComp[1] = j

  document.getElementById("left-img").src="./images/" + currentComp[0] + ".jpeg";
  document.getElementById("right-img").src="./images/" + currentComp[1] + ".jpeg";
  console.log(currentComp)

  if(isDone){
    document.getElementById("right-img").classList.add("hidden")
    document.getElementById("left-btn").classList.add("hidden")
    document.getElementById("right-btn").classList.add("hidden")
    document.getElementById("fav-btn").classList.remove("hidden")
    document.getElementById("try-btn").classList.remove("hidden")
  }
}

window.onload = function() {
  nextComp(currentComp[0], currentComp[1]);
};