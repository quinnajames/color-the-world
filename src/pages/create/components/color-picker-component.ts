import { Component } from '@angular/core';
@Component({
  selector: 'color-picker',
  template: `
  <div>Color picker
  <p>
  <input type="color" id="html5colorpicker"
  (ngModelChange)="colorChange($event)"
  [ngModel]="value">
  </p></div>
  `
})
export class ColorPickerComponent{
  value: string;
  constructor() {
    this.value = '#ff9000';
  }
  colorChange(e) {
    console.log(e);
  }
}
