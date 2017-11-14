import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePage } from './create';
import { ColorPickerComponent } from './components/components';

@NgModule({
  declarations: [
    CreatePage,
    ColorPickerComponent
  ],
  imports: [
    IonicPageModule.forChild(CreatePage),
  ],
  exports: [
    CreatePage
  ]
})
export class CreatePageModule {}
