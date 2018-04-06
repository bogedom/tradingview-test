import {AfterViewInit, Component, OnInit} from '@angular/core';/*
import * as Datafeed from '../assets/datafeeds/udf/src/udf-compatible-datafeed';*/
import { MyDatafeed } from './shared/my-datafeed';
import {ChatService} from "./shared/chat.service";
import { Bar, LibrarySymbolInfo } from '../assets/charting_library/datafeed-api';
import {SocketService} from "./shared/socket.service";
import { HttpClient } from '@angular/common/http';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  /*symbolInfo: LibrarySymbolInfo[] = [{
    name: 'USD',
    full_name: 'USD Full name',
    base_name: [''],
    ticker: 'USD',
    description: '',
    type: '',
    session: '1000-0200',
    exchange: 'XETRA',
    listed_exchange: '',
    timezone: 'UTC',
    pricescale: 128,
    minmov: 1,
    fractional: true,
    minmove2: 4,
    has_intraday: false,
    supported_resolutions: ['1', '15', '30', '60', 'D', '2D', '3D', 'W', '3W', 'M', '6M'],
    intraday_multipliers: ['1', '5', '15'],
    has_seconds: true,
    seconds_multipliers: ['1S', '5S', '15S'],
    has_daily: false,
    has_weekly_and_monthly: false,
    has_empty_bars: false,
    force_session_rebuild: true,
    has_no_volume: false,
    volume_precision: 0,
    data_status: 'streaming',
    expired: false,
    expiration_date: 0,
    sector: 'sector',
    industry: 'industry',
    currency_code: 'usd'
  },{
    name: 'USDA',
    full_name: 'USDAAAAA Full name',
    base_name: [''],
    ticker: 'USD',
    description: '',
    type: '',
    session: '1000-0200',
    exchange: 'XETRA',
    listed_exchange: '',
    timezone: 'UTC',
    pricescale: 128,
    minmov: 1,
    fractional: true,
    minmove2: 4,
    has_intraday: false,
    supported_resolutions: ['1', '15', '30', '60', 'D', '2D', '3D', 'W', '3W', 'M', '6M'],
    intraday_multipliers: ['1', '5', '15'],
    has_seconds: true,
    seconds_multipliers: ['1S', '5S', '15S'],
    has_daily: false,
    has_weekly_and_monthly: false,
    has_empty_bars: false,
    force_session_rebuild: true,
    has_no_volume: false,
    volume_precision: 0,
    data_status: 'streaming',
    expired: false,
    expiration_date: 0,
    sector: 'sector',
    industry: 'industry',
    currency_code: 'usd'
  }];

  bars: Bar[] = [
    {
      time: Date.now(),
      open: 143.6,
      high: 143.8792,
      low: 142.9,
      close: 143.17,
      volume: 18933397
    }, {time: Date.now(), open: 173.68, high: 175.15,low: 166.92, close: 168.34, volume: 38962839}
  ];*/

    constructor(private chat: ChatService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.sendMessage()
  }

  sendMessage() {
    setInterval(() => {
      const i = Math.floor(Math.random() * 2);
      //this.chat.sendMsg(this.bars);
    }, 5000);
    /*this.httpClient.get('https://demo_feed.tradingview.com/history?symbol=AAPL&resolution=D&from='+ Date.now()+'&to='+Date.now())
      .subscribe(response => {

        const bars: Bar[] = [];


          const volumePresent = response['v'] !== undefined;
          const ohlPresent = response['o'] !== undefined;

          for (let i = 0; i < response['t'].length; ++i) {
            const barValue: Bar = {
              time: response.t[i] * 1000,
              close: Number(response.c[i]),
              open: Number(response.c[i]),
              high: Number(response.c[i]),
              low: Number(response.c[i]),
            };

            if (ohlPresent) {
              barValue.open = Number(response.o[i]);
              barValue.high = Number(response.h[i]);
              barValue.low = Number(response.l[i]);
            }

            if (volumePresent) {
              barValue.volume = Number(response.v[i]);
            }

            bars.push(barValue);
          }
        this.chat.sendMsg(bars);
        })*/
  }

  ngAfterViewInit() {

    $(document).ready(function () {
      const widget = window['tvWidget'] = new TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: true,
        symbol: 'AAPL',
        interval: 'D',
        container_id: 'tv_chart_container',
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: new MyDatafeed('https://demo_feed.tradingview.com', new ChatService(new SocketService())),
        library_path: '../assets/charting_library/',
        locale: 'en',
        // Regression Trend-related functionality is not implemented yet, so it's hidden for a while
        drawings_access: {type: 'black', tools: [{name: 'Regression Trend'}]},
        disabled_features: ['use_localstorage_for_settings'],
        enabled_features: ['study_templates'],
        charts_storage_url: 'http://saveload.tradingview.com',
        charts_storage_api_version: '1.1',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        debug: true
      });
    });
  }
}
