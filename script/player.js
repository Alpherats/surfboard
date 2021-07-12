let player;
const playerContainer = $('.video__wrapper')
let eventsInit = () => {
  function onProgress(currentTime) {
    if(currentTime > 20) {
      console.log("the video reached 20 seconds!");
    }
  }


  $('.play').click(e => {
    e.preventDefault();
   
    if(playerContainer.hasClass("paused")){
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else{   playerContainer.addClass("paused")
    player.playVideo();}
    
  })
}
setInterval(()=>{
  const durationSec=player.getDuration();
  const completedSec = player.getCurrentTime();
  const completedPercent = (completedSec/durationSec)*100;
  console.log(completedPercent)
  $(".duration__length").css({
    "left": `${completedPercent}%`
  });

  $(".duration__length-wrap").click(e=>{
    const bar = $(e.currentTarget);
    const clickedPosition=e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition/bar.width())*100;
    $(".duration__length").css({
      left: `${newButtonPositionPercent}%`
    })

  })
}, 1000)



function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "3TdPBB9Z_cs",
    // videoId: "1wkPMUZ9vX4&ab",
    events: {
      // onReady: onPlayerReady,
      // onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

const VolumeSound = document.querySelector('#volume-length');


 
///////////
// function onPlayerReady() {
//   function updateTime() {
//     var oldTime = videotime;
//     if (player.getVolume() == 0) {
//       player.setVolume('100');
//     } else {
//       player.setVolume('0');
//     }
  
//   }
//   timeupdater = setInterval(updateTime, 100);
// }
// when the time changes, this will be called.
function onProgress(currentTime) {
  if(currentTime > 2) {
    console.log("the video reached 20 seconds!");
  }
}

eventsInit();

/////////////////////



let soundControl;
let intervalId;
let soundLevel;


const soundBtn = document.querySelector('#mic');

soundBtn.addEventListener('click', soundOff);///нужен цикл?
soundControl = document.getElementById('micLevel');
soundControl.min=0;
soundControl.max=10;
soundControl.value=soundControl.max;
soundControl.addEventListener('input', changeSoundVolume);


function soundOff(){
  if (player.getVolume() == 0) {
		player.setVolume('100');
	} else {
		player.setVolume('0');
	}
}

function changeSoundVolume(){
  video.volume=soundControl.value/10;
  if(video.volume==0){
    soundBtn.classList.add('active');
  }else{
    soundBtn.classList.remove('active');
  }
}











 // videoVolume=document.querySelector('#volume-length').oninput;
// video = document.querySelector('#yt-player'); //// как получить связь с YT плеером?????
// const v = this.value;
// function videoVolume(){
//   console.log(v);
//   video.getVolume = v/100
// }

// const VolumeOff =document.querySelector("#mic");

// VolumeOff.addEventListener("click", e =>{
//   e.preventDefault;
//   if (v==0) {
//     v=50;
//   }else{
//     v=0;
//   }
// }) 

// videoVolume();



