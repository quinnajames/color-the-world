import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  mod = function(x, n) { // make sure mod always gives a positive result
    return ((x%n)+n)%n;
  }

  hexToHsv(hexString) {
    let r = parseInt(hexString.slice(1,3),16);
    let g = parseInt(hexString.slice(3,5),16);
    let b = parseInt(hexString.slice(5,7),16);
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

    let s = 0;
    if (v > 0) {
      s = Math.round((c / v) * 100);
    }
    v = Math.round(v * 100 / 255);
    return [h,s,v];

  }

  hsvToHex(hsvArray) {
    let rgbArray = this.hsvToRgb(hsvArray);
    let str = '#';
    rgbArray.forEach(el => {
      el = el.toString(16);
      if (el.length == 1) {
        el = '0' + el;
      }
      str += el;
    })
    return str;
  }

    hsvToRgb(hsvArray) {
      let h = hsvArray[0];
      let s = hsvArray[1] / 100;
      let v = hsvArray[2] / 100;


      let c = v * s;
      console.log('chroma: ' + c);

      let h_ = h / 60;
      let x = c * (1 - Math.abs(this.mod(h_,2)-1));
      console.log('x: ' + x );
      console.log('h_:' + h_);
      let r1, g1, b1;
      if (h <= 0 || h >= 360) {
        r1 = 0; g1 = 0; b1 = 0;
      }
      else {
        if (h_ <= 1) {
          r1 = c; g1 = x; b1 = 0;
        }
        else if (h_ > 1 && h_ <= 2) {
          r1 = x; g1 = c; b1 = 0;
        }
        else if (h_ > 2 && h_ <= 3) {
          r1 = 0; g1 = c; b1 = x;
        }
        else if (h_ > 3 && h_ <= 4) {
          r1 = 0; g1 = x; b1 = c;
        }
        else if (h_ > 4 && h_<= 5) {
          r1 = x; g1 = 0; b1 = c;
        }
        else if (h_ > 5 && h_ <= 6) {
          r1 = c; g1 = 0; b1 = x;
        }
      }
      let m = v - c;
      let r = r1 + m; let g = g1 + m; let b = b1 + m;
      r = Math.round(r*255);
      g = Math.round(g*255);
      b = Math.round(b*255);
      return [r,g,b];
    }
}
