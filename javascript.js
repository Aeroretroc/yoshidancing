const audio = new Audio();
audio.src = "yoshimusic.mp3";
audio.loop = true;

function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    var x = document.getElementById("hidee");

    T.style.display = "block";  // <-- Set it to block
    x.style.display = "none";
}

