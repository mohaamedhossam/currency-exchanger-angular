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
  @Input() isInDetails: boolean = false; // Default "this is flag is in details page or not"
  toCurr: string = this.toCurrency;
  fromCurr: string = this.fromCurrency;
  inAmount: number = this.Amount;
  isAllowed: boolean = true;
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
  public currencyData: { [currency: string]: number } = {};
  public currencies: string[] = [];
  Result: number = 1;
  toSelected(value: string): void {
    this.toCurr = value;
    console.log(this.toCurrency);
  }
  fromSelected(value: string): void {
    this.fromCurr = value;
    console.log(this.fromCurrency);
  }

  input3(value: any) {
    this.inAmount = value;
    console.log(this.Amount);
  }
  handleConvert(): number {
    this.fromCurrency = this.fromCurr;
    this.toCurrency = this.toCurr;
    this.Amount = this.inAmount;
    this.currencyConverterService.setToCurrency(this.toCurrency);
    this.currencyConverterService.setFromCurrency(this.fromCurrency);
    this.currencyConverterService.setAmount(this.Amount);
    this.Result = this.Amount * this.currencyData[this.toCurrency];
    return this.Result;
  }
  handleMoreDetailsClick() {
    this.router.navigate(['./details']);
  }
  validateInput(value: string) {
    if (!value || parseInt(value) < 0) {
      // Display error message disable convert button
      this.isAllowed = false;
      alert('Please enter a positive number.');
    } else {
      this.isAllowed = true;
    }
  }
}
