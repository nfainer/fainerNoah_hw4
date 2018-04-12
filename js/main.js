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
imageBanner = document.querySelector('#houseImages')
seekslider = document.querySelector('.seekslider')
curTimeText = document.querySelector('.curTimeText')
durTimeText = document.querySelector('.durTimeText')
mutebtn = document.querySelector('.mutebtn');
rwd = document.querySelector('.rwd');
fwd = document.querySelector('.fwd');


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

  if(houseName == "Stark"){document.querySelector('.house-info').textContent = 'House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryens invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.'}
  if(houseName == "Baratheon"){document.querySelector('.house-info').textContent = 'House Baratheon of Storms End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storms End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.'}
  if(houseName == "Lannister"){document.querySelector('.house-info').textContent = 'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of Kings Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in Kings Landing, the traditional seat of the royal family.'}
  if(houseName == "Greyjoy"){document.querySelector('.house-info').textContent = 'House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoys sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.'}
  if(houseName == "Tully"){document.querySelector('.house-info').textContent = 'House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."'}
  if(houseName == "Arryn"){document.querySelector('.house-info').textContent = 'House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.'}
  if(houseName == "Targaryen"){document.querySelector('.house-info').textContent = 'House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Roberts Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.'}
  if(houseName == "Tyrell"){document.querySelector('.house-info').textContent = 'House Tyrell began as a cadet branch of House Gardener, the ancient Kings of the Reach. The Tyrells became senior servants of the main Gardener line, serving for centuries as castellans of the royal castle at Highgarden. Over time they rose to prominence as one of the strongest noble Houses in the Reach, and even intermarried with the royal line - though so did many other powerful Houses from the Reach.'}
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

function vidSeek(){
  let seekto = vidPlayer.duration * (seekslider.value / 100);
  vidPlayer.currentTime = seekto;
}

function seektimeupdate(){
  let nt = vidPlayer.currentTime * (100 / vidPlayer.duration);
  seekslider.value = nt;

   curmins = Math.floor(vidPlayer.currentTime / 60);
   cursecs = Math.floor(vidPlayer.currentTime - curmins * 60);
   durmins = Math.floor(vidPlayer.duration / 60);
   dursecs = Math.round(vidPlayer.duration - durmins * 60);

  if(cursecs < 10) { cursecs = "0"+cursecs; }
  if(dursecs < 10) { dursecs = "0"+dursecs; }
  if(curmins < 10) { curmins = "0"+curmins; }
  if(durmins < 10) { durmins = "0"+durmins; }

  curTimeText.innerHTML = curmins + ":" + cursecs;
  durTimeText.innerHTML = durmins + ":" + dursecs;

}

function vidmute(){
  if (vidPlayer.muted){
    vidPlayer.muted = false;
    mutebtn.innerHTML = "Mute";

  } else {
    vidPlayer.muted = true;
    mutebtn.innerHTML = "Unmute";
  }
}

function skipfwd(){
  vidPlayer.currentTime += 10;
}

function skiprwd(){
  vidPlayer.currentTime -= 10;
}


// event handelling at the bottomNav
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox);
vidControls.addEventListener('click', pausePlay);
seekslider.addEventListener('change', vidSeek);
vidPlayer.addEventListener('timeupdate', seektimeupdate);
mutebtn.addEventListener('click', vidmute);
fwd.addEventListener('click', skipfwd);
rwd.addEventListener('click', skiprwd);


})();
