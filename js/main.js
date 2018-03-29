// JavaScript Document
(() => {
console.log("linked up");

String.prototype.capIt = function() {
  return this.replace(this.charAt(), this.charAt().toUpperCase());
}

//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = document.querySelector('.close-lightbox');
vidPlayer =document.querySelector('video');
vidControls = document.querySelector('.controls');



//functions in the middle
function showHouseVideo(){
  //debugger;
  let houseName = this.className.split(' ')[1].capIt()
  //split apart the class name on the element, grab the house from the result
  document.querySelector('h1').textContent = `House ${houseName}`;
  lightbox.classList.add('show-lightbox');
  //make the video play
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  vidPlayer.play();
}

function closeLightBox(){
  lightbox.classList.remove('show-lightbox')
  //stop video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;


  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

function pausePlay(){
  // flip the icon to "play"
  let theButton = this.firstElementChild;

  if (vidPlayer.paused == true){
    vidPlayer.play();
    theButton.dataset.icon = "pause";

  } else {
    vidPlayer.pause();
    theButton.dataset.icon = "play";
  }

}




// event handelling at the bottomNav
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox)
vidControls.addEventListener('click', pausePlay)


})();
