let player;
const playerContainer = $('.video__wrapper')
setInterval(() => {
  if(!playerContainer.hasClass("paused")) console.log(player)
}, 1000);
let eventsInit = () => {
  function onProgress(currentTime) {
    if(currentTime > 20) {
      console.log("the video reached 20 seconds!");
    }
  }


  $('.play').click(e => {
    e.preventDefault();
    const durationSec=player.getDuration();
    if(playerContainer.hasClass("paused")){
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else{   playerContainer.addClass("paused")
    player.playVideo();}
    setInterval(()=>{
      const completedSec = player.getCurrentTime();
      const completedPercent = (completedSec/durationSec)*100;
      console.log(completedSec)
      $(".duration__img").css({
        left: `${completedPercent}%`
      });

      $(".duration__btn-wrap").click(e=>{
        const bar = $(e.currentTarget);
        const clickedPosition=e.orifinalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition/bar.width())*100;
        $(".duration__img").css({
          left: `${newButtonPositionPercent}%`
        })

      })
    }, 1000)
    
    
  })
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
///////////
function onPlayerReady() {
  function updateTime() {
    var oldTime = videotime;
    if(player && player.getCurrentTime) {
      videotime = player.getCurrentTime();
    }
    if(videotime !== oldTime) {
      onProgress(videotime);
    }
  }
  timeupdater = setInterval(updateTime, 100);
}
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


const soundBtn = document.querySelector('mic');

soundBtn.addEventListener('click', soundOff);///нужен цикл?
soundControl = document.getElementById('micLevel');
soundControl.min=0;
soundControl.max=10;
soundControl.value=soundControl.max;
soundControl.addEventListener('input', changeSoundVolume);


function soundOff(){
  if(video.volume==0){
    video.volume=soundLevel;
    soundControl.value = soundLevel*10
    soundBtn.classList('active');
  }else{
    soundLevel=video.volume;
    video.volume=0;
    soundControl.value = 0
    soundBtn.classList.add('active');
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



