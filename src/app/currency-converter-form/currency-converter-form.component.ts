import { Component, Input } from '@angular/core';
import axios from 'axios';
import { CurrencyRates } from '../Models/Result';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-currency-converter-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter-form.component.html',
  styleUrl: './currency-converter-form.component.css',
})
export class CurrencyConverterFormComponent {
  @Input() toCurrency = 'EUR'; // Default to EUR
  @Input() fromCurrency = 'USD'; // Default to USD
  @Input() Amount: number = 1; // Default amount
  constructor(private router: Router) {}
  ngOnInit(): void {
    // this.toCurrency = 'EUR';
    // this.fromCurrency = 'USD';
    axios(
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oLf23dmp8n5z4DGEl4D6GYIsRyjJzO95KdwK4Dc9'
    ).then((response) => {
      this.currencyData = response.data.data;
      this.currencies = Object.keys(this.currencyData).map(
        (currency) => currency
      );
      //console.log(this.currencies[8]);
      //console.log(currencyData['AUD']);
      //console.log(response.data.data);
      // this.Results = response.data.data;
      // this.currencies = Object.keys(this.Results).map((currency) => currency);
      // console.log(Object.values(this.Results).map((currency) => currency));
      console.log(this.toCurrency);
      console.log(this.fromCurrency);
      this.Result = this.Amount * this.currencyData[this.toCurrency];
      // console.log(response.data.data);
    });
  }
  public currencyData: { [currency: string]: number } = {};
  public currencies: string[] = [];
  // toCurrency: string = '';
  // fromCurrency: string = '';
  // Amount: number = 1;
  Result: number = 1;
  toSelected(value: string): void {
    this.toCurrency = value;
    console.log(this.toCurrency);
  }
  fromSelected(value: string): void {
    this.fromCurrency = value;
    console.log(this.fromCurrency);
  }

  input3(value: any) {
    this.Amount = value;
    console.log(this.Amount);
  }
  handleConvert() {
    this.Result = this.Amount * this.currencyData[this.toCurrency];
    console.log(this.Result);
  }
  handleMoreDetailsClick() {
    const url = `details?toCurrency=${this.toCurrency}&fromCurrency=${this.fromCurrency}&amount=${this.Amount}`;
    this.router.navigate(['./details']);
  }
  // public Results: CurrencyRates[] = [];
  // public currencies: String[] = [];
}
