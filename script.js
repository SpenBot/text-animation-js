

///////////////////////// SET DOM VARIABLES /////////////////////////////
/////////////////////////////////////////////////////////////////////////

let textDisplay = document.getElementById('textDisplay')
let technoPortrait = document.getElementById('technoFace')
let userCursor = document.getElementById('userCursor')
let nextIndicator = document.getElementById('nextIndicator')




///////////////////////// SET GLOBAL VARIABLES //////////////////////////

let textCount = 0
let sampleText = [
  "Greetings human.",
  "I am Technotron-4000, human-computer relations.",
  "It is my purpose to serve the user of this terminal.",
  "Please enter in your username."
]

let toPortraitAnimate = -1
let animatePortraitOn = null

let nextBlink = 1
let animateNextOn = null

let cursorBlink = 1





////////////////////////// ANIMATE TEXT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateText(str) {

  // declare local variables
  let textSplit = str.split("")
  let count = 0
  let textArray = []
  let finalText = ""

  // hide nextIndicator
  // nextIndicator.style.visibility = 'hidden'
  clearInterval(animateNextOn)
  nextIndicator.style.visibility = 'hidden'

  // define function add timeout letters
  function addLetters() {

    if (textSplit[count] !== " " && count < textSplit.length ) {
      setTimeout( ()=>  {
        textArray.push(textSplit[count])
        finalText = textArray.join("")
        textDisplay.innerHTML= finalText
        document.getElementById('boop').play()
        count += 1
        addLetters()
      }, 60)
    } else if (textSplit[count] === " " && count < textSplit.length ) {
        textArray.push(textSplit[count])
        finalText = textArray.join("")
        textDisplay.innerHTML= finalText
        count += 1
        addLetters()
    } else if ( count >= textSplit.length ) {
        animatePortraitOff()
        animateNextOn = setInterval( setNext, 600)
    }

  }

  // call function add letters
  addLetters()

}





////////////////////////// PORTRAIT STATE ///////////////////////////////
/////////////////////////////////////////////////////////////////////////


function animateFace () {
      toPortraitAnimate *= -1

      if (toPortraitAnimate == -1) {
        technoPortrait.style.backgroundImage = "url('images/TT-closed-4.png')"
      } else if (toPortraitAnimate == 1) {
        technoPortrait.style.backgroundImage = "url('images/TT-open-4.png')"
      }
}




////////////////////////// ANIMATE PORTRAIT OFF //////////////////////////
/////////////////////////////////////////////////////////////////////////

function animatePortraitOff () {
  clearInterval(animatePortraitOn)
  technoPortrait.style.backgroundImage = "url('images/TT-closed-4.png')"
}




////////////////////////// CURSOR STATE /////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function setCursor () {
      cursorBlink *= -1

      if (cursorBlink === -1) {
        userCursor.style.backgroundColor = "black"
      } else if (cursorBlink === 1) {
        userCursor.style.backgroundColor = "rgb(108, 249, 56)"
      }
}




////////////////////////// NEXT STATE ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function setNext () {
      nextBlink *= -1

      if (nextBlink === 1) {
        nextIndicator.style.visibility = 'hidden';
      } else if (nextBlink === -1) {
        nextIndicator.style.visibility = 'visible';
      }
}


////////////////////////// ANIMATE NEXT OFF //////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateNextOff () {
  clearInterval(animateNextOn)
  nextIndicator.style.visibility = 'hidden'
}




////////////////////////// ANIMATE ALL ON LOAD //////////////////////////
/////////////////////////////////////////////////////////////////////////


window.onload = function() {

  nextIndicator.style.visibility = 'hidden';

  let animateCursor = setInterval( setCursor, 400)

  setTimeout( ()=> {

    let str = sampleText[textCount]

    animateText(str)
    animatePortraitOn = setInterval( animateFace, 120)

    textCount += 1

  }, 600 )



}



////////////////////////// ANIMATE ALL ON CLICK /////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateAll () {

  let str = sampleText[textCount]

  animateText(str)
  animatePortraitOn = setInterval( animateFace, 120)

  textCount += 1

}



//
