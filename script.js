console.log("Welcome to my first js file");
let songIndex = 0;
let audio = new Audio('songs/10.mp3');
// audio.play();
let masterplay = document.getElementById('masterplay');
let playing = document.getElementById('playing');
let progressbar = document.getElementById('progressbar');
let songItems= Array.from(document.getElementsByClassName('songitem'));

let songs = [
    songname = 'Srivalli-pushpa the rise', filepath = 'songs/10.mp3', coverpath = 'logo/apple.jpg',
    songname = 'Dev Bg Tune (Short)', filepath = 'songs/1.mp3', coverpath = 'logo/apple.jpg',
    songname = 'Dev Sad Bg Tune 1 ( Oh Ho Ho..)', filepath = 'songs/2.mp3', coverpath = 'logo/dell.jpg',
    songname = 'Dev Sad Bg Tune 3 (Full) ( Oh Ho Ho..)', filepath = 'songs/3.mp3', coverpath = 'logo/hp.jpg',
    songname = 'Dharme Cha Arthe Cha Full Song _ Mahabharat dharma(MP3_128K)_1', filepath = 'songs/4.mp3', coverpath = 'logo/lenovo.jpg',
    songname = 'Dharme Cha Arthe Cha Full Song _ Mahabharat dharma(MP3_128K)_1', filepath = 'songs/5.mp3', coverpath = 'logo/logo.jpg',
    songname = 'Kabir Singh ENTRY BG', filepath = 'songs/6.mp3', coverpath = 'logo/logo1.png',
    songname = 'Over_the_Horizon', filepath = 'songs/7.mp3', coverpath = 'logo/main-logo.png',
    songname = 'Soft Romantic', filepath = 'songs/8.mp3', coverpath = 'logo/smiley.jpg',
    songname = 'Ya Li Lii 128kbps', filepath = 'songs/9.mp3', coverpath = 'logo/hp.jpg',
    songname = 'srivalli_theme', filepath = 'songs/10.mp3', coverpath = 'logo/lenovo.jpg',
    songname = '8', filepath = 'songs/11.mp3', coverpath = 'logo/dell.jpg'
]

// for playing songs and changing name through javascript
songItems.forEach((element,i )=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText=songs[i].filepath;
})

masterplay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        playing.style.opacity = 1;
    }
    else {
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        playing.style.opacity = 0;
    }
})

audio.addEventListener('timeupdate', () => {
    // console.log('timeUpdate');
    progress = parseInt((audio.currentTime / audio.duration) * 100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audio.currentTime = progressbar.value * audio.duration / 100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audio.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audio.currentTime = 0;
        audio.play();
        playing.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

