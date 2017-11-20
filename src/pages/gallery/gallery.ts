import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  saved: string[][]|null;
  maxSize: number;
  settings: SettingsService;
  constructor(public navCtrl: NavController,
  public storage: Storage) {
    this.settings = SettingsService.getInstance();
    this.storage.get('colors').then((c) => {
      this.maxSize = this.settings.getGallerySize();
      this.saved = c.slice(0,this.maxSize);
      console.log(`Max size: ${this.maxSize}`);
    });
  }

}
