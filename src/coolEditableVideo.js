import editly from "editly";

/**
 * a cool editable video
 */
class CoolEditableVideo{
  /**
   * @param {Number} width - the width of the output video
   * @param {Number} height - the height of the output video
   * @param {Number} fps - the fps of the output video
   */
  constructor(width, height, fps){
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.clips = []
  }

  /**
   * add a clip to the video
   */
  add(clip){
    this.clips.push(clip)
    clip._setVideo(this);
    return this
  }

  /**
   * get the editly spec for the clips-only
   */
  getClipsOutputEditlySpec(){
    const clips = []

    for(const clip of this.clips){
      clips.push(clip.getOutputEditlySpec())
    }

    return clips
  }

  /**
   * @param {String} outputPath - the path to the video output
   * @param {Boolean} fast - get a fast output (useful for a preview)
   */
  getOutputEditlySpec(outputPath, fast=false){
    return {
      outPath : outputPath,
      width : this.width,
      height : this.height,
      fps : this.fps,
      fast, 
      clips : this.getClipsOutputEditlySpec()
    }
  }

  /**
   * render the final output
   * @param {String} outputPath - the path to the video output
   */
  renderOut(outputPath){
    editly(this.getOutputEditlySpec(outputPath));
  }
}

export default CoolEditableVideo;
