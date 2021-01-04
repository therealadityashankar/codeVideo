import Clip from "./clip.js"

export default class VideoClip extends Clip{
  /**
   * @param {Number} [duration=undefined] optional, the duration of the clip
   */
  constructor(duration){
    super()
    this.duration = duration
  }

  getLayersOutputEditlySpec(){
    return this.layers.map(layer => layer.getOutputEditlySpec())
  }

  getOutputEditlySpec(){
    return {
      duration : 2,
      layers : this.getLayersOutputEditlySpec()
    }
  }
}
