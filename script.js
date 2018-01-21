

///////////////////////// SET DOM VARIABLES /////////////////////////////
/////////////////////////////////////////////////////////////////////////

let textDisplay = document.getElementById('textDisplay')
let technoPortrait = document.getElementById('technoFace')


///////////////////////// SET GLOBAL VARIABLES //////////////////////////
let sampleText = "Hello World"
let toPortraitAnimate = 1








////////////////////////// PORTRAIT STATE ///////////////////////////////
/////////////////////////////////////////////////////////////////////////







////////////////////////// ANIMATE TEXT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateText(str) {

  // declare local variables
  let textSplit = str.split("")
  let count = 0
  let textArray = []
  let finalText = ""

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
      }, 160)
    } else if (textSplit[count] === " " && count < textSplit.length ) {
        textArray.push(textSplit[count])
        finalText = textArray.join("")
        textDisplay.innerHTML= finalText
        count += 1
        addLetters()
    } else if ( count >= textSplit.length ) {
        animatePortraitOff()
    }

  }

  // call function add letters
  addLetters()

}



////////////////////////// ANIMATE PORTRAIT ON //////////////////////////
/////////////////////////////////////////////////////////////////////////

function animatePortraitOn () {

  // let faceAni = setInterval( ()=> {
  //   toPortraitAnimate *= -1
  //   console.log(toPortraitAnimate)
  //
  //   if (toPortraitAnimate == -1) {
  //     technoPortrait.style.backgroundImage = "url('images/TT-closed-4.png')"
  //   } else if (toPortraitAnimate == 1) {
  //     technoPortrait.style.backgroundImage = "url('images/TT-open-4.png')"
  //   }
  //
  // }, 140)

}


////////////////////////// ANIMATE PORTRAIT OFF //////////////////////////
/////////////////////////////////////////////////////////////////////////

function animatePortraitOff () {
  clearInterval(animatePortraitOn)
}




////////////////////////// ANIMATE ALL //////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateAll (str) {

  animateText(str)
  animatePortraitOn()

}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
