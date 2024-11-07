function toggleVideo() {
    const video = document.getElementById("background-video");
    const checkbox = document.getElementById("videoToggle");
    video.style.display = checkbox.checked ? "block" : "none";
}

document.getElementById("videoToggle").checked = true;

const audio = document.getElementById('audio');
audio.volume = 0.1;

const volumeDown = document.getElementById('volumeDown');
const volumeUp = document.getElementById('volumeUp');
const volumeInfo = document.getElementById('volumeInfo');

let volumeInfoTimeout;

function showVolumeInfo(volume) {
    volumeInfo.textContent = `Громкость: ${Math.round(volume * 100)}%`;
    volumeInfo.style.opacity = 1;

    clearTimeout(volumeInfoTimeout);

    volumeInfoTimeout = setTimeout(() => {
        volumeInfo.style.opacity = 0;
    }, 2000);
}

volumeDown.addEventListener('click', function() {
    audio.volume = Math.max(0, audio.volume - 0.1);
    showVolumeInfo(audio.volume);
});

volumeUp.addEventListener('click', function() {
    audio.volume = Math.min(1, audio.volume + 0.1);
    showVolumeInfo(audio.volume);
});