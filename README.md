# CodeVideo
make videos with ease via code !

## some example code (from /test)

```js
import CoolEditableVideo from "../src/coolEditableVideo.js";                                                                                                                                                       
import VideoClip from "../src/clip/videoClip.js"
import TextLayer from "../src/layers/text.js"
import ImageLayer from "../src/layers/image.js"

const video = new CoolEditableVideo(1000, 500, 20);
const clip = ( 
              new VideoClip(2)
              .add(new ImageLayer("./thirst.jpeg", {
                left: 10, 
                top: 10, 
                width: video.width - 20, 
                height: video.height - 20, 
              }))
              );
const clip2 = ( 
                new VideoClip(5)
                .add(new ImageLayer("./thirst.jpeg", {
                  left: 10, 
                  top: 10, 
                  width: video.width - 20, 
                  height: video.height - 20, 
                }))
               .add(new TextLayer("Of course this is the best library ever written", {fillStyle: "black", font: "Yellowtail", size:50}))
               )

video.add(clip).add(clip2)
video.renderOut("output.gif")
```

![rendered gif](/test/output.gif)

