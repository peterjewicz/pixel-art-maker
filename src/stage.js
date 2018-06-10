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
    * TODO make sizing dynamic
    * @return void
    */
    init() {
    //   setTimeout(function(){
    //     const wrapper = document.getElementById("canvas-wrapper");
    //     console.log(wrapper.clientHeight);
    // }, 3000);
    //
    //   return;
      const wrapper = document.getElementById("canvas-wrapper");

      this.canvas = document.getElementById("canvas");
      this.canvas.style.width = wrapper.clientWidth;
      this.canvas.style.height = wrapper.clientHeight;
      this.canvas.width = wrapper.clientWidth;
      this.canvas.height = wrapper.clientHeight;

      this.ctx = canvas.getContext("2d");

      //TODO remove /2 - added as the full size takes a few seconds to render
      for(var x = 0; x < this.canvas.width / 2; x = x + 20) {
        for(var y = 0; y < this.canvas.height / 2 ; y = y + 20) {
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
    * TODO define mousedown on the stage object
    * @return void
    */
    handleMouseDown() {
      window.mouseDown = true;
    }

    /**
    * Toggles the mouseup state on the current stage class
    * TODO define mouseup on the stage object
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
    * Takes a color and sets the fill color as it
    * @param string color
    * @return void
    */
    setColor(color) {
      this.fillColor = color;
      this.erase = false;
    }


}
