
const music = document.querySelector("#musicplayer");
const pervBtn = document.querySelector("#arrowbtn #btn1");
const nextBtn = document.querySelector("#arrowbtn #btn2");
const playBtn = document.querySelector("#music #start");
const pauseBtn = document.querySelector("#music #pause");

const MUSIC_COUNT = 4;
let currentAudio = 0;

function musicBtn() {
    playBtn.classList.remove(HIDDEN_CLASSNAME);
}

musicBtn();

function playAudio() {
    if(music.currentTime === 0) {
        music.loop = true;
        music.play();
    } else {
        music.play();
    }
    musicOn();
}

function pauseAudio() {
    pauseBtn.classList.add(HIDDEN_CLASSNAME);
    playBtn.classList.remove(HIDDEN_CLASSNAME);
    music.pause();
}


function loadAudio() {
    pauseBtn.classList.remove(HIDDEN_CLASSNAME);
    playBtn.classList.add(HIDDEN_CLASSNAME);
    music.src = `musics/${currentAudio}.mp3`;
    music.load();
    playAudio();
}

function handleNextBtn() {
    if (currentAudio < MUSIC_COUNT) {
        currentAudio += 1;
    } else {
        currentAudio = 0;
    }
    music.pause();
    loadAudio();
}

function handlePrevBtn() {
    if (currentAudio > MUSIC_COUNT) {
        currentAudio -= 1;
    } else {
        currentAudio = 0;
    }
    music.pause();
    loadAudio();
}

playBtn.addEventListener("click", loadAudio);
pauseBtn.addEventListener("click", pauseAudio);
nextBtn.addEventListener("click", handleNextBtn);
pervBtn.addEventListener("click", handlePrevBtn);

const musics = [
    "Lofi Study",
    "Happy Day",
    "Jazz Happy",
    "Motivational Epic Music",
    "Sweet Love",
];

const musicTitle = document.querySelector(".title-box span");

function musicOn() {
    musicTitle.innerText = musics[currentAudio];
}

musicOn();