import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ToplandingComponent } from './components/toplanding/toplanding.component';
import { OperationsComponent } from './components/operations/operations.component';
import { MapComponent } from './components/map/map.component';
import { ProductsComponent } from './components/products/products.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AngularSvgIconModule  } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    ToplandingComponent,
    OperationsComponent,
    MapComponent,
    ProductsComponent,
    CommentsComponent,
    FaqComponent,
    AboutComponent,
    AgenciesComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class LayoutModule { }
