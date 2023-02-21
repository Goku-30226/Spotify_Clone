console.log("hey there");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progessBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "Let me Love You", filePath: "1.mp3" },
    { songName: "Perfect", filePath: "2.mp3" },
    { songName: "Shape of You", filePath: "3.mp3" },
    { songName: "Despacito", filePath: "4.mp3" }
]
let current = 0;

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;
        
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progessBar.value = progress;
})

progessBar.addEventListener('change', () => {
    audioElement.currentTime = progessBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id[4]);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${songIndex+1}.mp3`
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 3) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
        audioElement.src = `${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        masterSongName.innerText(songs[songName]);
    }
})

document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 3;
    }
    else {
        songIndex -= 1;
        audioElement.src = `${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }
})

// prev.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(current === 0){
//         current = 3;
//         return playSong(current);
//     }
//     return playSong(--current);
// })

// next.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(current === 3){
//         current = 0;
//         return playSong(current);
//     }
//     return playSong(++current);
// })


// function playSong(index){
//     // play the song at the `index` in songs 
// }
