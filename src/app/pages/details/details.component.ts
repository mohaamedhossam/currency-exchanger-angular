import { Component, Input } from '@angular/core';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';
import {
  CurrencyConverterService,
  currencyConverterServiceFactory,
} from '../../currency-converter.service';
import { Router } from '@angular/router';
import axios from 'axios';

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
  constructor(
    public currencyConverterService: CurrencyConverterService,
    private router: Router
  ) {}
  @Input() Amount: number = 1;

  toCurrency!: string;
  fromCurrency!: string;
  amount!: number;
  name!: string;

  ngOnInit(): void {
    this.toCurrency = this.currencyConverterService.getToCurrency();
    this.fromCurrency = this.currencyConverterService.getFromCurrency();
    this.amount = this.currencyConverterService.getAmount();
    axios(
      `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_oLf23dmp8n5z4DGEl4D6GYIsRyjJzO95KdwK4Dc9&currencies=${this.fromCurrency}`
    ).then((response) => {
      const currencyCode = this.fromCurrency;
      const data = response.data.data;
      const currencyData = data[currencyCode];
      this.name = currencyData.name;
    });
  }
  handleBackHome(): void {
    this.router.navigate(['']);
  }
}
