import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'color-picker',
  template: `
  <div>
  <p>
  <input type="color" id="html5colorpicker"
  (ngModelChange)="colorChange($event)"
  [ngModel]="value">
  </p></div>
  `
})
export class ColorPickerComponent{
  value: string;
  @Output() onColorChange = new EventEmitter<string>();
  constructor() {
    this.value = '#ff9000';
  }
  colorChange(e) {
    this.onColorChange.emit(e);
  }
}
