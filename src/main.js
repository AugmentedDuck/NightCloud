const unsortedArray = [];
const sortedArray = [];
const nrOfElements = 35
const currentComp = [0, 0]
let leftButton;
let rightButton;

function setup() {
  createCanvas(600, 400);
  background(200)
  for (let i = 0; i < nrOfElements; i++){
    unsortedArray[i] = int(random(nrOfElements))
  }
  nextComp(currentComp[0], currentComp[1])
}

function draw() {

}

function chooseLeft(){


  nextComp(currentComp[0], currentComp[1])
}

function chooseRight(){


  nextComp(currentComp[0], currentComp[1])
}

function nextComp(i, j){
  if (i < unsortedArray.length){
    if (j < nrOfElements){
      j++
    } else {
      j = i + 1
      i++
      j++
    }
  }
  
  currentComp[0] = i
  currentComp[1] = j
  console.log(currentComp)
}