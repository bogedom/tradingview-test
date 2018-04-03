import {
  ErrorCallback, HistoryCallback,
  IDatafeedChartApi, IDatafeedQuotesApi, IExternalDatafeed, LibrarySymbolInfo, OnReadyCallback,
  QuotesCallback, ResolutionString, ResolveCallback, SearchSymbolResultItem, SearchSymbolsCallback, SubscribeBarsCallback, Timezone
} from '../../assets/charting_library/datafeed-api';

export class MyDatafeed implements IExternalDatafeed, IDatafeedQuotesApi, IDatafeedChartApi {
  configuration = {
    supports_search: true,
    supports_group_request: false,
    supports_marks: true,
    supports_timescale_marks: true,
    supports_time: true,
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
    supported_resolutions: ['1', '15', '30', '60', 'D', '2D', '3D', 'W', '3W', 'M', '6M']
  };

  resultItem: SearchSymbolResultItem = {
    'symbol': 'btcusd',
    'full_name': 'BTCE:BTCUSD', // e.g. BTCE:BTCUSD
    'description': 'My BTCUSD description',
    'exchange': 'XETRA',
    'ticker': 'BTCUSD',
    'type': 'stock' // or "futures" or "bitcoin" or "forex" or "index"
  };

  resultItems: SearchSymbolResultItem[] = [this.resultItem];
  symbolInfo: LibrarySymbolInfo = {
    name: 'USD',
    full_name: 'USD Full name',
    base_name: [''],
    ticker: '',
    description: '',
    type: '',
    session: '1700-0200',
    exchange: 'NYSE',
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
  };


  onReady(callback: OnReadyCallback): void {
    callback(this.configuration);
  }

  getQuotes(symbols: string[], onDataCallback: QuotesCallback, onErrorCallback: (msg: string) => void): void {
  }

  subscribeQuotes(symbols: string[], fastSymbols: string[], onRealtimeCallback: QuotesCallback, listenerGUID: string): void {
  }

  unsubscribeQuotes(listenerGUID: string): void {
  }

  searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: SearchSymbolsCallback): void {
    onResult(this.resultItems);
  }

  resolveSymbol(symbolName: string, onResolve: ResolveCallback, onError: ErrorCallback): void {
    onResolve(this.symbolInfo);
  }

  getBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, rangeStartDate: number, rangeEndDate: number, onResult: HistoryCallback, onError: ErrorCallback, isFirstCall: boolean): void {
  }

  subscribeBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, onTick: SubscribeBarsCallback, listenerGuid: string, onResetCacheNeededCallback: () => void): void {
  }

  unsubscribeBars(listenerGuid: string): void {
  }

  public constructor(datafeedURL: string) {
  }

}
