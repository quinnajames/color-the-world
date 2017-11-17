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
    this.hsvColor = this.cl.rgbToHsv(event);
  }


}
