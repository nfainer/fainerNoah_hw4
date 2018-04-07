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
vidPlayer = document.querySelector('video');
vidControls = document.querySelector('.controls');
faPause = document.querySelector('.fa-pause')
imageBanner = document.querySelector('#houseImages')
volumeControl = document.querySelector('vol-control');



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

  scrollBanners(this.dataset.offset);
}

function scrollBanners(offset) {
  //move the banner images to the left
  let moveIt  = offset * 600 + "px";

  imageBanner.style.right = moveIt;

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

setVolume = function() {
  video.volume = this.value / 100;
};


// event handelling at the bottomNav
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox);
faPause.addEventListener('click', pausePlay);
volumeControl.addEventListener('change', setVolumne);
volumeControl.addEventListener('input', setVolumne);

})();
