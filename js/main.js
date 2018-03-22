(() => {
  console.log('linked up');
  //variables first
  // grab the video
  const vidPlayer = document.querySelector('video'),
  pauseButton = document.querySelectorAll('button')[0],
  playButton = document.querySelectorAll('button')[1],
  rewindButton = document.querySelectorAll('button')[2];

  //funcitons go in the middle

  function volOn() {
    vidPlayer.muted = false;
  }

  function volOff() {
    vidPlayer.muted = true;
  }

  function playVideo() {
    //make player play
    vidPlayer.play();
  }

  function pauseVideo() {
    //make player play
    vidPlayer.pause();
  }

  function rewindVideo() {
    //make player play
    vidPlayer.currentTime -= 5;
  }

  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);

  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);
  rewindButton.addEventListener('click', rewindVideo);

})();
