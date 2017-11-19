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
  constructor(public navCtrl: NavController,
  private cl: ColorService) {

  }
  handleColorChange(event) {
    console.log(`handleColorChange(${event})`);
    this.currentColor = event;
    this.hsvColor = this.cl.hexToHsv(event);
    console.log(this.cl.hsvToHex(this.hsvColor));
    let hueVar1 = this.cl.hsvToHex(this.cl.hueShiftHsv(this.hsvColor,90));
    let hueVar2 = this.cl.hsvToHex(this.cl.hueShiftHsv(this.hsvColor,180));
    let hueVar3 = this.cl.hsvToHex(this.cl.hueShiftHsv(this.hsvColor,270));
    console.log(`${hueVar1}, ${hueVar2}, ${hueVar3}`);
    
  }


}
