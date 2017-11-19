import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ColorService } from '../../services/color.service';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  currentColor: string;
  hsvColor: string[];
  variants: string[];
  constructor(public navCtrl: NavController,
  private cl: ColorService) {
    this.variants = [];
  }
  handleColorChange(event) {
    console.log(`handleColorChange(${event})`);
    this.currentColor = event;
    this.hsvColor = this.cl.hexToHsv(event);
    console.log(this.cl.hsvToHex(this.hsvColor));
    this.variants = [];
    for (var x = 90; x < 360; x += 90) {
      this.variants.push(this.cl.hsvToHex(this.cl.hueShiftHsv(this.hsvColor,x)));
    console.log(this.variants);
    }
  }

}
