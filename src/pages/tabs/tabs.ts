import { Component } from '@angular/core';
import { GalleryPage, SettingsPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CreatePage';
  tab2Root = SettingsPage;
  tab3Root = GalleryPage;

  constructor() {

  }
}
