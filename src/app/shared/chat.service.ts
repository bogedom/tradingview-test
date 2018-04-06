import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {SocketService} from "./socket.service";
import { Bar, LibrarySymbolInfo } from '../../assets/charting_library/datafeed-api';

@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: SocketService) {
    this.messages = <Subject<Bar[]>>wsService
      .connect()
      .map((response: any): Bar[] => {
        return response;
      })
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: Bar[]) {
    this.messages.next(msg);
  }

}
