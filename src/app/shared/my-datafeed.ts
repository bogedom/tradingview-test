import {
  Bar, DatafeedQuoteValues,
  ErrorCallback,
  HistoryCallback, HistoryDepth, HistoryMetadata,
  IDatafeedChartApi,
  IDatafeedQuotesApi,
  IExternalDatafeed,
  LibrarySymbolInfo,
  OnReadyCallback, QuoteOkData,
  QuotesCallback, ResolutionBackValues,
  ResolutionString,
  ResolveCallback,
  SearchSymbolResultItem,
  SearchSymbolsCallback,
  SubscribeBarsCallback,
  Timezone
} from '../../assets/charting_library/datafeed-api';
import {Data} from "@angular/router";
import {ChatService} from "./chat.service";

export class MyDatafeed implements IExternalDatafeed, IDatafeedQuotesApi, IDatafeedChartApi {
  chatService: ChatService;

  configuration = {
    supports_search: false,
    supports_group_request: false,
    supports_marks: false,
    supports_timescale_marks: false,
    supports_time: false,
    exchanges: [
      {value: '', name: 'All Exchanges', desc: ''},
      {value: 'XETRA', name: 'XETRA', desc: 'XETRA'},
      {value: 'NSE', name: 'NSE', desc: 'NSE'}
    ],
    symbols_types: [
      {name: 'All types', value: ''},
      {name: 'Stock', value: 'stock'},
      {name: 'Index', value: 'index'}
    ],
    supported_resolutions: [ "1", "15", "30", "60", "D", "2D", "3D", "W", "3W", "M", '6M' ]
  };

  resultItem: SearchSymbolResultItem = {
    symbol: 'AAPL',
    full_name: 'XETRA:AAPL', // e.g. BTCE:BTCUSD
    description: 'My AAPL description',
    exchange: 'XETRA',
    ticker: 'btcusd',
    type: 'stock' // or "futures" or "bitcoin" or "forex" or "index"
  };

  resultItems: SearchSymbolResultItem[] = [this.resultItem];
  symbolInfo: LibrarySymbolInfo = {
    name: 'AAPL',
    full_name: 'AAPL Full name',
    base_name: [''],
    ticker: 'btcusd',
    description: 'Apple Inc.',
    type: 'stock',
    session: '0930-1630',
    exchange: 'NasdaqNM',
    listed_exchange: '',
    timezone: 'America/New_York',
    pricescale: 100,
    minmov: 1,
    fractional: true,
    minmove2: 0,
    has_intraday: false,
    supported_resolutions: ['D', '2D', '3D', 'W', '3W', 'M', '6M'],
    intraday_multipliers: ['1', '5', '15'],
    has_seconds: true,
    seconds_multipliers: ['1S', '5S', '15S'],
    has_daily: false,
    has_weekly_and_monthly: false,
    has_empty_bars: true,
    force_session_rebuild: true,
    has_no_volume: false,
    volume_precision: 0,
    data_status: 'streaming',
    expired: false,
    expiration_date: 0,
    sector: '',
    industry: '',
    currency_code: 'usd'
  };
  //symbolInfo: LibrarySymbolInfo;

  bars: Bar[] = [
    {
      time: 1491782400,
      open: 143.6,
      high: 143.8792,
      low: 142.9,
      close: 143.17,
      volume: 18933397
    },
    {
      time: 1522108800,
      open: 173.68,
      high: 175.15,
      low: 166.92,
      close: 168.34,
      volume: 38962839}
  ];

  meta: HistoryMetadata = {
    noData: false
  };

  //bars: Bar[];


  datafeedQuoteValues: DatafeedQuoteValues = {
    ch: +0.16,
    chp: 0.98,
    short_name: "AA",
    exchange: "XETRA",
    description: "Alcoa Inc. Common",
    lp: 16.57,
    ask: 16.58,
    bid: 16.57,
    open_price: 16.25,
    high_price: 16.60,
    low_price: 16.25,
    prev_close_price: 16.41,
    volume: 4029041
  };

  quotedata: QuoteOkData[] = [{
    s: 'ok',
    n: 'btcusd',
    v: this.datafeedQuoteValues,
  }];


  onReady(callback: OnReadyCallback): void {
    setTimeout(() => callback(this.configuration), 0);
    console.log('called onReady');
  }

  getQuotes(symbols: string[], onDataCallback: QuotesCallback, onErrorCallback: (msg: string) => void): void {
    /*onDataCallback(this.quotedata)*/
    console.log('called Quotes');
  }

  subscribeQuotes(symbols: string[], fastSymbols: string[], onRealtimeCallback: QuotesCallback, listenerGUID: string): void {
    console.log('called Suscribe Quotes');
  }

  unsubscribeQuotes(listenerGUID: string): void {
    console.log('called Unsubscribe Quotes');
  }

  searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: SearchSymbolsCallback): void {
    onResult(this.resultItems);
    console.log('called Search Symbol');
  }

  resolveSymbol(symbolName: string, onResolve: ResolveCallback, onError: ErrorCallback): void {
    /*this.chatService.messages.subscribe(msg => {
      console.log(JSON.parse(msg));
      onResolve(JSON.parse(msg));
    });*/
    setTimeout(() => {
      onResolve(this.symbolInfo);
      }, 0);
    console.log('called Resolve Symbol');
  }

  getBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, rangeStartDate: number, rangeEndDate: number, onResult: HistoryCallback, onError: ErrorCallback, isFirstCall: boolean): void {
    onResult(this.bars, this.meta);
    //onError('error..........');
    console.log('called Get Bars');
  }

  subscribeBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, onTick: SubscribeBarsCallback, listenerGuid: string, onResetCacheNeededCallback: () => void): void {
    console.log('called Subscribe Bars');
  }

  unsubscribeBars(listenerGuid: string): void {
    console.log('called Unsubscribe Bars');
  }

  calculateHistoryDepth(resolution: ResolutionString, resolutionBack: ResolutionBackValues, intervalBack: number) {
    console.log('called History depth');
    return undefined;
  }

  constructor(datafeedURL: string, chatService: ChatService) {
    this.chatService = chatService;
  }

}
