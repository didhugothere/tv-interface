const body = document.querySelector("body");
const box = document.querySelector(".box");
const netflix = document.querySelector(".netflix");
const primeVideo = document.querySelector(".prime-video");

var netflixState = false;
var primeState = false;

// function state(variable, variableState) {
//   if (variableState) {
//     variable.classList.remove("box-hover");
//     variableState = false;
//   } else {
//     variable.classList.add("box-hover");
//     variableState = true;
//   }
//   console.log(netflixState,primeState)
// }

function stateNetflix() {
  if (netflixState) {
    netflix.classList.remove("box-hover");
    netflixState = false;
  } else {
    netflix.classList.add("box-hover");
    netflixState = true;
  }
}

function statePrime() {
  if (primeState) {
    primeVideo.classList.remove("box-hover");
    primeState = false;
  } else {
    primeVideo.classList.add("box-hover");
    primeState = true;
  }
}

body.addEventListener("keydown", (e) => {
  var key = e.key.toLowerCase();
  if (key === "arrowleft") {
    if (primeState) {
      primeVideo.classList.remove("box-hover");
      primeState = false;
      stateNetflix();
    } else {
      stateNetflix();
    }
  } else if (key === "arrowright") {
    if (netflixState) {
      netflix.classList.remove("box-hover");
      netflixState = false;
      statePrime();
    } else {
      statePrime();
    }
  } else if (key === "enter") {
    if (netflixState && !primeState) {
      window.location.replace("https://netflix.com");
    } else if (!netflixState && primeState) {
      window.location.replace("https://primevideo.com");
    }
  }
});
