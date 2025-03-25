const video = document.getElementById("video");

video.addEventListener("click", () => {
    if (video.paused) {
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

