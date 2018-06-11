'use strict';
import StageInit from './stage';
import ColorPicker from './colorpicker';

  //Inialize the Application here



//delay for domload so clientHeight returns correct value on canvas
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
}, 100);
