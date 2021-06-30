const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song Titles
const songs = ['music_1', 'music_2', 'music_3'];

// Keep track of song
let songIndex = 1;

// Initial load song
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
	title.innerTEXT = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.png`;
}

function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play()
}

function pauseSong() {
	musicContainer.classList.remove('play')
	playBtn.querySelector('i.fas').classList.remove('fa-pause')
	playBtn.querySelector('i.fas').classList.add('fa-play');

	audio.pause();
}

function prevSong() {
	songIndex--;

	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);
	playSong();
}

function nextSong() {
	songIndex++;

	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);
	playSong();

}

// Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong()
	} else {
		playSong()
	}
});

// Change songs events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);