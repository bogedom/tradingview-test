import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { MyDatafeedService } from './shared/my-datafeed.service';


@NgModule({
  declarations: [
    AppComponent,
    ChartViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyDatafeedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
