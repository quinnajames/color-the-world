import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settings: SettingsService;
  gallerySize: number;
  constructor(public navCtrl: NavController,
  public storage: Storage) {
    this.settings = SettingsService.getInstance();
    this.gallerySize = this.settings.getGallerySize();
  }

  updateGallerySize(val: number) : void {
    this.settings.setGallerySize(val);
    this.storage.set('gallerySize', val);
    console.log("New gallery size: " + this.settings.getGallerySize());
  }

}
