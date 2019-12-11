import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'',
        component:LayoutFooterComponent,
        children:[
          {
            path: 'blogs',
            loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
          },
          {
            path: 'blog',
            loadChildren: () => import('./blogpost/blogpost.module').then(m => m.BlogpostModule)
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
