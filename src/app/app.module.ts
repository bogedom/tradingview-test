import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocketService } from './shared/socket.service';
import { ChatService } from './shared/chat.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
