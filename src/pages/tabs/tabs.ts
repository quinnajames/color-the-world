import { Component } from '@angular/core';
import { GalleryPage, CreatePage, AboutPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = AboutPage;
  tab3Root = GalleryPage;

  constructor() {

  }
}
