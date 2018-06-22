export default class {

  constructor() {

      this.button;
      this.elem;
      this.localKeys;
      this.loadItemsInsert;
      this.init();
  }

  init() {
    this.elem = document.getElementById("loader");
    this.loadItemsInsert = document.getElementById("loaded-items-insert");

    this.button = document.getElementById("load-button");
    this.button.addEventListener('click',(event) => {
      this.handleLoaderToggle()
    });

    const closeLoader = document.getElementById("close-load-wrapper");
    closeLoader.addEventListener('click',(event) => {
      this.handleLoaderToggle()
    });

    this.setLocalKeys();
    this.generateLoadHtml();

  }

  setLocalKeys() {
    this.localKeys = Object.keys(localStorage);
  }

  generateLoadHtml() {
    let outputHtml = "";

    for(var x = 0; x < this.localKeys.length; x++) {
      outputHtml += "<div><h2><a href='editor.html?load="+this.localKeys[x]+"'>"+this.localKeys[x]+"</a></h2></div>";
    }

    this.loadItemsInsert.innerHTML = outputHtml;
  }

  handleLoaderToggle() {
    this.elem.classList.toggle('active')
  }


}
