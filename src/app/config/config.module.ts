import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './containers/config/config.component';
import { ConfigSearchComponent } from './components/config-search/config-search.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ConfigComponent,
    ConfigSearchComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    AppMaterialModule
  ]
})
export class ConfigModule { }
