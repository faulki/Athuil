const video = document.getElementById("video");
const video2 = document.getElementById("video2");
console.log("js chargé")

video.addEventListener("click", () => {
    if (video.paused) {
        video.muted = false;
        video.play();
        video.classList.remove("video-paused"); // Supprime l'effet de dézoom
        video.classList.add("zoom-effect");
        document.body.classList.add("darken-bg");
    } else {
        video.pause();
        document.body.classList.remove("darken-bg"); // Retire l'effet sombre
        video.classList.remove("zoom-effect"); // Retire l'effet de zoom
        video.classList.add("video-paused"); // Ajoute l'effet de dézoom en transition
    }
});

video2.addEventListener("click", () => {
    if (video2.paused) {
        video2.muted = false;
        video2.play();
        video2.classList.remove("video-paused"); // Supprime l'effet de dézoom
        video2.classList.add("zoom-effect");
        document.body.classList.add("darken-bg");
    } else {
        video2.pause();
        document.body.classList.remove("darken-bg"); // Retire l'effet sombre
        video2.classList.remove("zoom-effect"); // Retire l'effet de zoom
        video2.classList.add("video-paused"); // Ajoute l'effet de dézoom en transition
    }
});
