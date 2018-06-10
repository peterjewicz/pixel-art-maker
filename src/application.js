'use strict';

//Inialize the Application here
import StageInit from './stage';

const colorpicker = window.AColorPicker.createPicker({
	attachTo: '#colorpicker',
	color: 'black'
});
let Stage = new StageInit;
Stage.init();

// window.AColorPicker.createPicker('div.container')
// 	.onchange = (picker) => {
// 		alert(picker.color);
// 	};

  colorpicker.onchange = (picker) => {
    Stage.setColor(picker.color);
  };
