// Class for handling sidebar clicks and active states
export default class {

  constructor(stage) {
    this.stage = stage;
    this.init();
  }

  init() {
    let classname = document.getElementsByClassName("sidebar-item");
        for (let i = 0; i < classname.length; i++) {
           classname[i].addEventListener('click',(event) => {
             this.switchActiveSidebar(event.srcElement)
           });
       }
  }


  switchActiveSidebar(elem) {

    let promise = new Promise(function(resolve, reject) {
      let currentlyActive = document.querySelector(".sidebar-item.active");
      currentlyActive.classList.remove("active");
      return resolve("Stuff worked!");
    });

    promise.then(result => {

      //Grab the parent as clicks on I won't get active correclty
      if(elem.nodeName === "I") {
        elem = elem.parentElement;
      }
      elem.className += " active";
    })

  }

}
