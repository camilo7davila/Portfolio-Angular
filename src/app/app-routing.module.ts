import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutFooterComponent } from './layouts/layout-footer/layout-footer.component';
import { LayoutcontactComponent } from './layouts/layoutcontact/layoutcontact.component';


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
            path:'',
            component: LayoutcontactComponent,
            children: [
              {
                path: 'blog',
                loadChildren: () => import('./blogpost/blogpost.module').then(m => m.BlogpostModule)
              },
            ]
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
