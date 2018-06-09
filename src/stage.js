/**
* Main Stage Class
* Handles setting up and interaction with the Canvas elemet
*/
export default class {

    constructor() {
      this.fillColor = "black";
      this.erase = false;

      //The reference to the canvas element and context of it
      //required for all drawing functionality so we'll define it here once
      this.canvas;
      this.ctx;
    }

    /**
    * Initializes the stage by creating it and binding events
    * @return void
    */
    init() {
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
      for(var x = 0; x < 600; x = x + 20) {
        for(var y = 0; y < 400; y = y + 20) {
          this.ctx.rect(x,y,20,20);
          this.ctx.stroke();
        }
      }
      this.bindEvents();
    }


    /**
    * Binds event handlers to the canvas - Should pass reference of current 'this' to function
    * @return void
    */
    bindEvents() {
      this.canvas.addEventListener("click", () => {
        this.handleClick();
      });
      this.canvas.addEventListener("mousedown", this.handleMouseDown);
      this.canvas.addEventListener("mouseup", this.handleMouseUp);
      this.canvas.addEventListener("mousemove", () => {
        this.handleDrag();
      });

      var eraseHandler = document.getElementById("erase");
      eraseHandler.addEventListener("click", () => {
        this.toggleErase();
      })

      //set event listeners on the color switchers
      var classname = document.getElementsByClassName("color-switcher");
      for (var i = 0; i < classname.length; i++) {
          classname[i].addEventListener('click',(event) => {
            this.switcherColor(this, event.srcElement)
          });
      }
    }


    /**
    * Handles a single click on the Canvas
    * Note: this also fires at the end of the drag event
    * @return void
    */
    handleClick() {
      var rect = this.canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      x = x - (x % 20);
      y = y - (y % 20);

      if(this.erase === false) {
        this.ctx.fillRect(x,y,20,20);
      }
    }


    /**
    * Toggles the mouse down state on the current stage class
    * @return void
    */
    handleMouseDown() {
      window.mouseDown = true;
    }

    /**
    * Toggles the mouseup state on the current stage class
    * @return void
    */
    handleMouseUp() {
      window.mouseDown = false;
    }


    /**
    * Handles dragging and coloring across the Canvas
    * @return void
    */
    handleDrag() {
      if(window.mouseDown) {

        var rect = this.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        x = x - (x % 20);
        y = y - (y % 20);
        if(this.erase === false) {
          this.ctx.fillStyle = this.fillColor;
          this.ctx.fillRect(x,y,20,20);
        } else{
          this.ctx.clearRect(x, y, 20, 20);
        }
      }
    }


    /**
    * Toggles the erase state ON
    * @return void
    */
    toggleErase() {
      this.erase = true;
    }


    /**
    * Switches the currently selected color
    * @return void
    */
    switcherColor(Stage, elem) {
      var color = elem.dataset.color;
      this.fillColor = color;
      this.erase = false;
    }

}
