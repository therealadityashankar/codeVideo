'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const editly = require("editly");

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
  }

  /**
   * @param {string} outputPath - the path to the video output
   * @param {boolean} fast - get a fast output (useful for a preview)
   */
  getOutputEditlySpec(outputPath, fast=false){
    return {
      outPath : outputPath,
      width : this.width,
      height : this.height,
      fps : this.fps,
      fast, 
      clips : [{
        duration : 2,
        layers : [
          {type : "rainbow-colors"}
        ]
      }]
    }
  }

  /**
   * render the final output
   */
  renderOut(outputPath){
    editly(this.getOutputEditlySpec(outputPath));
  }
}

exports.coolEditableVideo = CoolEditableVideo;
