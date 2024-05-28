import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from './components/about/about.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { LinkComponentComponent } from './components/link-component/link-component.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'agencias',
    component: AgenciesComponent
  },
  {
    path: 'super',
    component: LinkComponentComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
