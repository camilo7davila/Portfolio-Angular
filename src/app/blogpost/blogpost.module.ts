import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostComponent } from './components/blogpost/blogpost.component';


@NgModule({
  declarations: [BlogpostComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
