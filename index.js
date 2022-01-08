const audioArray = document.querySelectorAll("audio");
document.addEventListener('keydown', e => {
    for (audio of audioArray) {
        if (audio.attributes[0].value === e.code) {
            console.log(audio.currentSrc);
            audio.play();
        }
    }
})