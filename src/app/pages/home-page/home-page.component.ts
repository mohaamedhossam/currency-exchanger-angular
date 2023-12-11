import { Component, Input, NgModule } from '@angular/core';
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

  // @Input() Amount: number = 1;
  // handleConversion(event: any): void {
  //   const { value, from, to } = event;
  //   const convertedValue = value * 1.2;
  //   //console.log(`Converted value: ${convertedValue} ${to} from ${from}`);
  // }
}
/*[initialValue]="10"
  [fromCurrency]="'USD'"
  [toCurrency]="'EUR'"
  [currencyOptions]="['USD', 'EUR', 'JPY']"
  (convertCurrency)="handleConversion($event)" */
