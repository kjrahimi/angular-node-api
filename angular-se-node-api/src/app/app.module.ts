import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NodeApiComponent } from './node-api/node-api.component';
import { HelperComponent } from './helper/helper.component';
import { NodeApiService } from './shared/services/node-api.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    NodeApiComponent,
    HelperComponent
  ],
  providers: [
    NodeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
