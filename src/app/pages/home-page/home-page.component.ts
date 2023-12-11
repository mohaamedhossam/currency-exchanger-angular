import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';
import { CurrencyConverterService } from '../../currency-converter.service';
import { currencyConverterServiceFactory } from '../../currency-converter.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CurrencyConverterFormComponent, NgForOf],
  providers: [
    {
      provide: CurrencyConverterService,
      useFactory: currencyConverterServiceFactory,
    },
  ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(public currencyConverterService: CurrencyConverterService) {}
  ninePopularCurr: string[][] = [
    ['USD', 'EUR', 'CAD'],
    ['BRL', 'CNY', 'JPY'],
    ['AUD', 'RUB', 'SEK'],
  ];
}
