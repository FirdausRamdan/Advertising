function changeVideo() {
    let videoSelector = document.getElementById("videoSelector");
    let videoId = videoSelector.value;
    let youtubeFrame = document.getElementById("youtubeVideo");
    youtubeFrame.src = `https://www.youtube.com/embed/${videoId}`;
}