import { Component } from '@angular/core';
@Component({
  selector: 'color-picker',
  template: `
  <div>Color picker
  <p>
  <input type="color" id="html5colorpicker"
  value="#ff0000">
  </p></div>
  `
})
export class ColorPickerComponent{
  constructor() {

  }
}
