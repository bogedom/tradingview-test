import { TestBed, inject } from '@angular/core/testing';

import { MyDatafeedService } from './my-datafeed.service';

describe('MyDatafeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDatafeedService]
    });
  });

  it('should be created', inject([MyDatafeedService], (service: MyDatafeedService) => {
    expect(service).toBeTruthy();
  }));
});
