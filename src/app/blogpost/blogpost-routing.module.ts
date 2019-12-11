import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostComponent } from './components/blogpost/blogpost.component';


const routes: Routes = [
  {
    path:'',
    component: BlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
