// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntegrationComponent } from './integration/integration.component';
@NgModule({
  declarations: [
    AppComponent,
    IntegrationComponent // Declare IntegrationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
