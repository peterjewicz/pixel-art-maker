export default class {

    constructor() {
      this.fillColor = "black";
    }

    init() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      for(var x = 0; x < 600; x = x + 20) {
        for(var y = 0; y < 400; y = y + 20) {
          ctx.rect(x,y,20,20);
          ctx.stroke();
        }
      }

      this.bindEvents();
    }

    bindEvents() {
      canvas.addEventListener("click", this.handleClick);
      canvas.addEventListener("mousedown", this.handleMouseDown);
      canvas.addEventListener("mouseup", this.handleMouseUp);
      canvas.addEventListener("mousemove", () => {
        this.handleDrag();
      });

      //set event listeners on the color switchers
      var classname = document.getElementsByClassName("color-switcher");
      for (var i = 0; i < classname.length; i++) {
          classname[i].addEventListener('click',(event) => {
            this.switcherColor(this, event.srcElement)
          });
      }
    }

    handleClick() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      x = x - (x % 20);
      y = y - (y % 20);
      ctx.fillRect(x,y,20,20);
    }


    handleMouseDown() {
      window.mouseDown = true;
    }

    handleMouseUp() {
      window.mouseDown = false;
    }

    handleDrag() {
      if(window.mouseDown) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        x = x - (x % 20);
        y = y - (y % 20);

        ctx.fillStyle = this.fillColor;
        ctx.fillRect(x,y,20,20);
      }
    }


    switcherColor(Stage, elem) {
      var color = elem.dataset.color;
      this.fillColor = color;
    }

}
