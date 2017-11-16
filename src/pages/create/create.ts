import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  currentColor: string;
  constructor(public navCtrl: NavController) {

  }
  handleColorChange(event) {
    console.log(`handleColorChange(${event})`);
    this.currentColor = event;
  }

}
