'use strict';
import StageInit from './stage';

  //Inialize the Application here

  // const colorpicker = window.AColorPicker.createPicker({
  // 	attachTo: '#colorpicker',
  // 	color: 'black'
  // });

//delay for domload so clientHeight returns correct value on canvas
setTimeout(function(){
    let Stage = new StageInit;
    Stage.init();
}, 100);
  // colorpicker.onchange = (picker) => {
  //   Stage.setColor(picker.color);
  // };
