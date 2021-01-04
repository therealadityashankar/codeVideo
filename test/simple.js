import CoolEditableVideo from "../src/coolEditableVideo.js";
import VideoClip from "../src/clip/videoClip.js"
import TextLayer from "../src/layers/text.js"

const video = new CoolEditableVideo(1000, 500, 60);
const clip = new VideoClip(2).add(new TextLayer("Some epic text", {fillStyle: "white", font: "Yellowtail", size:100}));
video.add(clip)
const spec = video.getOutputEditlySpec()

video.renderOut("output.mp4")
