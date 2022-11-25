const photoList = [];
const nrOfElements = 35
const scoreArray = [];
const currentComp = [0, 0]
let leftButton;
let rightButton;

for (let i = 0; i < nrOfElements; i++){
  photoList[i] = i
  scoreArray[i] = 0
}

function chooseLeft(){
  scoreArray[currentComp[0]]++
  console.log(scoreArray)
  nextComp(currentComp[0], currentComp[1])
}

function chooseRight(){
  scoreArray[currentComp[1]]++
  console.log(scoreArray)

  nextComp(currentComp[0], currentComp[1])
}

function nextComp(i, j){
  let isDone = false
  let favoritePhoto = 0
  let hatedPhoto = 0

  if (i < nrOfElements - 2){
    if (j < nrOfElements - 1){
      j++
    } else {
      j = i + 1
      i++
      j++
    }
  } else {
    let highest = Math.max(...scoreArray)
    let lowest = Math.min(...scoreArray)

    favoritePhoto = scoreArray.indexOf(highest)
    hatedPhoto = scoreArray.indexOf(lowest)

    isDone = true

    console.log(highest + " " + lowest + " - " + favoritePhoto + " " + hatedPhoto)
  }

  currentComp[0] = i
  currentComp[1] = j

  document.getElementById("left-img").src="./images/" + currentComp[0] + ".jpeg";
  document.getElementById("right-img").src="./images/" + currentComp[1] + ".jpeg";
  console.log(currentComp)

  if(isDone){
    document.getElementById("left-img").src="./images/" + favoritePhoto + ".jpeg";
    document.getElementById("right-img").src="./images/" + hatedPhoto + ".jpeg";
  }
}

window.onload = function() {
  nextComp(currentComp[0], currentComp[0]);
};