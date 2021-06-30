const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const NextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song Titles
const songs = ['music_1', 'music_2', 'music_3'];

// Keep track of song
let songIndex = 2;

// Initial load song
loadSong(songs[songIndex]);

// Update song details

function loadSong(song) {
	title.innerTEXT = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.png`;
}