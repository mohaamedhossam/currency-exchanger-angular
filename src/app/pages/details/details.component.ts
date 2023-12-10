import { Component, Input } from '@angular/core';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';
import {
  CurrencyConverterService,
  currencyConverterServiceFactory,
} from '../../currency-converter.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyConverterFormComponent],
  providers: [
    {
      provide: CurrencyConverterService,
      useFactory: currencyConverterServiceFactory,
    },
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(public currencyConverterService: CurrencyConverterService) {}
  @Input() Amount: number = 1;

  toCurrency!: string;
  fromCurrency!: string;
  amount!: number;

  ngOnInit(): void {
    this.toCurrency = this.currencyConverterService.getToCurrency();
    this.fromCurrency = this.currencyConverterService.getFromCurrency();
    this.amount = this.currencyConverterService.getAmount();
  }
}
