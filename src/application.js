'use strict';
import StageInit from './stage';
import ColorPicker from './colorpicker';
import FileHandler from './fileHandler';
import SidebarHandler from './sidebarHandler';

import LoadHandler from './loadHandler';
let loadHandler = new LoadHandler;

//We only want to execute the stage setup on the editor page itself
if( window.location.pathname != "/" ) {
  //delay for domload so clientHeight returns correct value on canvas
  //TODO Find a better way - I hate this
  setTimeout(function(){
      //setup the stage
      let Stage = new StageInit;
      Stage.init();

      //setup the color picker
      const colorpicker = window.AColorPicker.createPicker({
      	attachTo: '#colorpicker',
      	color: 'black'
      });
      let colorPickerModel = new ColorPicker(colorpicker, Stage);
      let fileHandler = new FileHandler(Stage);
      let sidebar = new SidebarHandler(Stage);
  }, 100);

}
