import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  mod = function(x, n) { // make sure mod always gives a positive result
    return ((x%n)+n)%n;
  }

  rgbToHsv(rgbString) {
    let r = parseInt(rgbString.slice(1,3),16);
    let g = parseInt(rgbString.slice(3,5),16);
    let b = parseInt(rgbString.slice(5,7),16);
    console.log('rgb: ' + [r, g, b]);
    let rgbMax; let rgbMin;
    rgbMax = rgbMin = r;
    if (r < Math.max(g,b)) {
      rgbMax = g > b ? g : b;
    }
    if (r > Math.min(g,b)) {
      rgbMin = g < b ? g : b;
    }
    let c = rgbMax - rgbMin;
    console.log('rgbMax:' + rgbMax);
    console.log('rgbMin:' + rgbMin);
    console.log('min(g,b):' + Math.min(g,b));
    console.log('max(g,b):' + Math.max(g,b));
    console.log('chroma: ' + c);
    let h_ = 0;
    if (c > 0) {
      if (rgbMax === r)       h_ = (g - b) / c % 6;
      else if (rgbMax === g)  h_ = (b - r) / c + 2;
      else                    h_ = (r - g) / c + 4;
    }
    let h = this.mod(Math.round(60 * h_),360);

    console.log('hue: ' + h);

    let i = (r+g+b)/3;
    let l = (rgbMax + rgbMin)/2;
    let v = rgbMax;

    console.log("i: " + i);
    console.log("l: " + l);

    console.log("i 100-scaled: " + i * 100 / 255);
    console.log("l 100-scaled: " + l * 100 / 255);
    console.log("v 100-scaled: " + v * 100 / 255);
    console.log("v: " + v);
    let s = 0;
    if (v > 0) {
      s = Math.round((c / v) * 100);
    }
    v = Math.round(v * 100 / 255);
    return [h,s,v];
    // let rgbMax = 'r';
    // let h;
    // if (g > r) rgbMax = 'g';
    // if (b > g && b > r) rgbMax = 'b';
    // switch(rgbMax) {
    //   case 'r':
    //   h =
    // }
  }
}
