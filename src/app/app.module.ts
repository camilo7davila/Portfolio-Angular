import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { LayoutFooterComponent } from './layouts/layout-footer/layout-footer.component';
import { LayoutcontactComponent } from './layouts/layoutcontact/layoutcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
