import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  saved: string[][]|null;
  constructor(public navCtrl: NavController,
  public storage: Storage) {
    this.storage.get('colors').then((c) => {
      this.saved = c;
    });
  }

}
