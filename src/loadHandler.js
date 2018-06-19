export default class {

  constructor() {

      this.button;
      this.elem;
      this.init();
  }

  init() {
    this.elem = document.getElementById("loader");

    this.button = document.getElementById("load-button");
    this.button.addEventListener('click',(event) => {
      this.loaderActive(this.elem)
    });
  }


  loaderActive(elem) {
    elem.className += " active";
  }


}
