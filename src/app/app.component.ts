import { AfterViewInit, Component } from '@angular/core';/*
import * as Datafeed from '../assets/datafeeds/udf/src/udf-compatible-datafeed';*/
import * as TradingView from '../assets/charting_library/charting_library.min';
import { MyDatafeed } from './shared/my-datafeed';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {

    $(document).ready(function () {
      const widget = window['tvWidget'] = new TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: true,
        symbol: 'AAPL',
        interval: 'D',
        container_id: 'tv_chart_container',
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: new MyDatafeed('https://demo_feed.tradingview.com'),
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
