import { Component, Input } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CurrencyConverterService,
  currencyConverterServiceFactory,
} from '../currency-converter.service';
@Component({
  selector: 'app-currency-converter-form',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: CurrencyConverterService,
      useFactory: currencyConverterServiceFactory,
    },
  ],
  templateUrl: './currency-converter-form.component.html',
  styleUrl: './currency-converter-form.component.css',
})
export class CurrencyConverterFormComponent {
  @Input() toCurrency = 'EUR'; // Default to EUR
  @Input() fromCurrency = 'USD'; // Default to USD
  @Input() Amount: number = 1; // Default amount
  @Input() isInDetails: boolean = false; // Default
  constructor(
    public currencyConverterService: CurrencyConverterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    axios(
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oLf23dmp8n5z4DGEl4D6GYIsRyjJzO95KdwK4Dc9'
    ).then((response) => {
      this.currencyData = response.data.data;
      this.currencies = Object.keys(this.currencyData).map(
        (currency) => currency
      );

      console.log(this.toCurrency);
      console.log(this.fromCurrency);
      this.Result = this.Amount * this.currencyData[this.toCurrency];
      this.currencyConverterService.setCurrencyData(this.currencyData);
    });
  }
  // isInDetails: boolean = this.currencyConverterService.getInDetails();
  public currencyData: { [currency: string]: number } = {};
  public currencies: string[] = [];
  Result: number = 1;
  toSelected(value: string): void {
    this.toCurrency = value;
    console.log(this.toCurrency);
    this.currencyConverterService.setToCurrency(this.toCurrency);
    // this.handleConvert();
  }
  fromSelected(value: string): void {
    this.fromCurrency = value;
    console.log(this.fromCurrency);
    this.currencyConverterService.setFromCurrency(this.fromCurrency);
    // this.handleConvert();
  }

  input3(value: any) {
    this.Amount = value;
    console.log(this.Amount);
    this.currencyConverterService.setAmount(this.Amount);
    // this.handleConvert();
  }
  handleConvert(): number {
    this.Result = this.Amount * this.currencyData[this.toCurrency];
    return this.Result;
  }
  handleMoreDetailsClick() {
    this.router.navigate(['./details']);
  }
}
