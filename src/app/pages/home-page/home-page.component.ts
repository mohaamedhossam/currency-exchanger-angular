import { Component, NgModule } from '@angular/core';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CurrencyConverterFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
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
