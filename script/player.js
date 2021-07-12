let player;
const playerContainer = $('.duration__img')
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

function getSoundValue(){
  
}

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
function onPlayerReady() {
  function updateTime() {
    var oldTime = videotime;
    if (player.getVolume() == 0) {
      player.setVolume('100');
    } else {
      player.setVolume('0');
    }
  
  }
  timeupdater = setInterval(updateTime, 100);
}



eventsInit();

let soundBtn = document.querySelector('#mic');
soundBtn.addEventListener('click', soundOff);
let soundControl = document.getElementById('micLevel');
function soundOff(){
  if (player.getVolume() == 0) {
		player.setVolume('100');
	} else {
		player.setVolume('0');
	}
}
function changeSoundVolume(){
  $("sound__length-wrap").click(e =>{
    const barS = $(e.currentTarget);
    const clickedPositionS=e.originalEvent.layerX;
    const newButtonPositionPercentSound = (clickedPositionS/barS.width())*100;
    $(soundControl).css({
      left: `${newButtonPositionPercentSound}%`
    })
  })
}

player.setVolume(changeSoundVolume);
player.seekTo(newButtonPositionPercent);////????????????????????
