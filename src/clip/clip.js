import BaseLayer from "../layers/base.js"

// base clip class
class Clip{
  constructor(){
    this.layers = []
  }

  _setVideo(video){
    this.video = video;
    this.layers.forEach(layer => layer._setVideo(video));
  }

  /**
   * add a layer
   *
   * @param {BaseLayer} layer - the layer to add
   */
  add(layer){
    this.layers.push(layer);
    layer._setClip(this);
    return this
  }
}

export default Clip;
