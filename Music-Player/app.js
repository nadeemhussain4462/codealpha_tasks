const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

const songs = [
    { title: 'Sukoon Paya', artist: 'Ghulam Mustafa Qadri', src: 'music/sukoon paya.mp4', cover: 'image/sukoon paya.jpg' },
    { title: 'Main bnda e Aasi', artist: 'Syed Hassan Ullah Hussani', src: 'music/main banda e aasi.mp3', cover: 'image/main banda e aasi.jpg' },
    { title: 'Krdo karam', artist: 'Nabeel Shaukat Ali ', src: 'music/krdo karam.mp3', cover: 'image/krdo karam.jpg' },
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.textContent = '⏸️';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = '▶️';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
    if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

loadSong(songs[songIndex]);
