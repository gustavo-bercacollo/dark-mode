const getTrail = document.querySelector('.trail');
const getBody = document.querySelector('body');
const getTitle = document.querySelector('h1');
const getSound = document.querySelector('audio');
const getVideo = document.getElementById('darkModeVideo')
const getButton = document.querySelector('button')
const getMusic = document.getElementById('musicLofi')

getTrail.addEventListener('click', ()=>{
  console.log('Clique no trail');
  getTrail.classList.toggle('dark')
  getBody.classList.toggle('dark')
  getSound.play();


  if (getBody.classList.contains('dark')) {
    getTitle.textContent = "Dark mode"; 
    getVideo.src = './assets/dark-mode.mp4'
    getVideo.play();
    
  }else{
    getTitle.textContent = 'Light mode'
    getVideo.src = './assets/light-mode.mp4'
    getVideo.play();
  }

})


function toggleSound() {
  if (getMusic.paused) {
    getMusic.play();
    getButton.classList.remove('ph-speaker-slash');
    getButton.classList.add('ph-speaker-high');
    getButton.title = 'Mute music';
  } else {
    getMusic.pause();
    getButton.classList.remove('ph-speaker-high'); 
    getButton.classList.add('ph-speaker-slash'); 
    getButton.title = "Play music";
  }
}


