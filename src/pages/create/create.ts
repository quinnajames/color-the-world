import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ColorService } from '../../services/color.service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  currentColor: string;
  hsvColor: string[];
  variants: string[];
  colorStorageSize: number;
  colorsToSave: string[];
  constructor(public navCtrl: NavController,
  private cl: ColorService,
  private storage: Storage) {
    this.variants = [];
    this.colorStorageSize = 10;
  }
  handleColorChange(event) {
    console.log(`handleColorChange(${event})`);
    this.currentColor = event;
    this.hsvColor = this.cl.roundArray(this.cl.hexToHsv(event));
    console.log(this.cl.hsvToHex(this.hsvColor));
    this.variants = [];
    for (var x = 90; x < 360; x += 90) {
      this.variants.push(this.cl.hsvToHex(this.cl.hueShiftHsv(this.hsvColor,x)));
    console.log(this.variants);
    }
  }

  saveColors() {
    let colorsToSave = [];
    colorsToSave.push(this.currentColor);
    this.variants.forEach((v) => {
      colorsToSave.push(v);
    })
    this.storage.get('colors').then((colors) => {
      if (colors) {
        if (colors.length == this.colorStorageSize) {
          colors.pop();
          colors.unshift(colorsToSave);
        }
      }
      else {
        colors = [colorsToSave];
      }
      this.storage.set('colors', colors);
    });
  }

}
