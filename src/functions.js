// technically to make this more professional, you need to download the songs into a local file
// so then the song when it needs to be played, doesn't need to be downloaded from Amazon (which is my link to the audio) then it would download it then play it. Then it will repeat
// so having it in local storage is technically in the backend, better
// since it owuld download all the songs, and just play when activated.
export function audioPlay(audioLetter, nameOfAudio) {
    // this plays teh audio according to the ID which is set to an audio element
    console.log(nameOfAudio)
    document.getElementById("display").innerHTML = nameOfAudio;
    // this above basically changes the innerHTML of the element with the display ID
    var audio = document.getElementById(audioLetter);
    audio.play();
}


