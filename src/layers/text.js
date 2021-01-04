import VideoLayerBase from "./videoLayerBase.js"

export default class TextLayer extends VideoLayerBase{
  /**
   * create a text layer
   *
   * only 1 of position.left or position.right should be specified and
   * only 1 of position.top or position.bottom should be specified
   *
   * centers text if no position is specified
   *
   * read more about the align, baseline, direction at 
   * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
   *
   * @param {String} text - the text to be put
   * @param {String} opts.font - the font to use
   * @param {Number} opts.size - the font size to use
   * @param {Number} opts.pos.left - the distance from the left
   * @param {Number} opts.pos.right - the distance from the right
   * @param {Number} opts.pos.top - the distance from the top
   * @param {Number} opts.pos.bottom - the distance from the bottom
   * @param {Boolean} [opts.stroke=false] - should the text be stoked ?
   * @param {Boolean} [opts.fill=true] - should the text be filled ?
   * @param {any} [opts.fillStyle="black"] - the color to fill with, supports all canvas color options
   * @param {any} [opts.strokeStyle="white]" - the color to stroke with, supports all canvas color options
   * @param {Number} opts.strokeWidth - the width of the stroke during stroking
   * @param {string} opts.align (see above)
   * @param {string} opts.baseline (see above)
   * @param {string} opts.direction (see above)
   */
   constructor(text, opts={}){
     super()
     const { 
             font="sans-serif", 
             size=30, 
             pos=undefined, 
             stroke=false, 
             fill=true, 
             strokeStyle="white", 
             strokeWidth=2, 
             fillStyle="black", 
             align="start", 
             baseline="middle", 
             direction="inherit"
     } = opts;

     this.text = text;
     this.font = font;
     this.size = size;
     this.pos = pos
     this.stroke = stroke;
     this.fill = fill;
     this.strokeStyle = strokeStyle;
     this.strokeWidth = strokeWidth;
     this.fillStyle = fillStyle;
     this.align = align;
     this.baseline = baseline;
     this.direction = direction;
   }
   

   async _textRenderingFunction({canvas}){
     const onRender = async progress => {
       const ctx = canvas.getContext("2d");
       ctx.save()

       // set relevent stuff
       ctx.font  = `${this.size}px ${this.font}`
       ctx.textAlign = this.align
       ctx.textBaseline = this.baseline
       ctx.direction = this.direction
       ctx.fillStyle = this.fillStyle
       ctx.strokeStyle = this.strokeStyle
       ctx.lineWidth = this.strokeWidth
       ctx.textDrawingMode = "path"
       ctx.patternQuality = "bilinear"
       ctx.quality = "bilinear"
       ctx.antialias = "gray";

       let pos = this.pos
       if(!pos){
         pos = {
           left : this.video.width/2 - (ctx.measureText(this.text).width/2),
           top : this.video.height/2
         }
       }

       if(pos.right) pos.left = this.video.width - ctx.measureText(text).width;
       if(pos.bottom) pos.top = this.video.height - this.size;
       if(this.fill) ctx.fillText(this.text, pos.left, pos.top)
       if(this.stroke) ctx.strokeText(this.text, pos.left, pos.top)
       ctx.restore()
     }

     return {onRender, onClose: () => {}}
   }

   getOutputEditlySpec(){
     return {
       type: "canvas",
       func: this._textRenderingFunction.bind(this)
     }
   }
}
