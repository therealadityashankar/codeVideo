import VideoLayerBase from "./videoLayerBase.js"

export default class ImageLayer extends VideoLayerBase{
  /**
   *
   * only one of opts.left and opts.right should be present
   * only one of opts.top and opts.bottom should be present
   *
   * @param {String} path - the path of the image
   * @param {Number} [opts.left=0] - the position of the image from the left
   * @param {Number} [opts.top=0] - the position of the image from the top
   * @param {Number} [opts.right=undefined] - the position of the image from the right
   * @param {Number} [opts.bottom=undefined] - the position of the image from the bottom
   * @param {Number} [opts.width] - the width of the image (cropped out)
   * @param {Number} [opts.height] - the height of the image (cropped out)
   */
  constructor(path, opts={}){
    super();
    this.path = path
    this.left = opts.left;
    this.top = opts.top;
    this.right = opts.right;
    this.bottom = opts.bottom;
    this.width = opts.width;
    this.height = opts.height;
  }

  getOutputEditlySpec(){
    let left = this.left??0;
    let top = this.top??0;
    if(this.right) left = this.video.width - this.right - this.width;
    if(this.bottom) top = this.video.height - this.height - this.bottom

    let widthRatio = 1;
    let heightRatio = 1;

    if(this.width) widthRatio = this.width/this.video.width;
    if(this.height) heightRatio = this.height/this.video.height;
    return {
      type: "image-overlay",
      path: this.path,
      width: widthRatio,
      height: heightRatio
    }
  }
}
