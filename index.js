const video = document.getElementById("mms-video");

const videoSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const hls = new Hls();
hls.loadSource(videoSrc);
hls.attachMedia(video);

const debug = document.getElementById("debug");
debug.innerText = `navigator.standalone === ${JSON.stringify(navigator.standalone)}
document.pictureInPictureEnabled === ${JSON.stringify(document.pictureInPictureEnabled)}
Hls.version === ${JSON.stringify(Hls.version)}`;

function nativeVideoPictureInPicture() {
  document.getElementById("native-video").requestPictureInPicture();
}

function mmsVideoPictureInPicture() {
  document.getElementById("mms-video").requestPictureInPicture();
}
