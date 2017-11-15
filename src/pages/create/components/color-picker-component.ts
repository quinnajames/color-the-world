import { Component } from '@angular/core';
@Component({
  selector: 'color-picker',
  template: `
  <div>Color picker
  <p>
  <input type="color" id="html5colorpicker"
  [(value)]="value" (change)="colorChange($event)">
  </p></div>
  `
})
export class ColorPickerComponent{
  value: string;
  constructor() {
    this.value = '#ff9000';
  }
  colorChange(e) {
    this.value = document.getElementsByTagName('input')[0].value;
    console.log(this.value);
    
  }
}
