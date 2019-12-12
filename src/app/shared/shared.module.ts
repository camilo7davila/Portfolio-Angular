import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
