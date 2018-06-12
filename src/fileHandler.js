export default class {

  constructor(stage) {
    this.stage = stage;
    this.init();
  }


  /**
  * Initializes the file handler
  * @return void
  */
  init() {
    const saveHandler = document.getElementById("save");
    saveHandler.addEventListener("click", () => {
      this.handleSave();
    });
  }


  /**
  * Converts the RGB code to human readable format
  * @param string r - red value
  * @param string g - green value
  * @param string b - blue value
  * @return string - hex string representing a color i.e #fffff
  */
  rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255)
          throw "Invalid color component";
      return ((r << 16) | (g << 8) | b).toString(16);
  }

  /**
  * Saves the current stage state as json encoded array to the file system
  * @return void - But side effect of a new file
  * TODO Investigage better color picker converter
  */
  handleSave() {
    let savedContent = [];
    let columnCount = 0;
    for(let y = 5; y < this.stage.canvas.height; y = y + 20){
      savedContent[columnCount] = [];
      for(let x = 5; x < this.stage.canvas.width; x = x + 20){
        let p = this.stage.ctx.getImageData(x, y, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
        savedContent[columnCount].push(hex);

      }
      columnCount++;
    }
    savedContent = JSON.stringify(savedContent);
    //TODO write to a file
  }

}
