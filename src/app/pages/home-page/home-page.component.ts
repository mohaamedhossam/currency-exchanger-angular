import { Component, NgModule } from '@angular/core';
import { CurrencyRates } from '../../Models/Result';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';

import axios from 'axios';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CurrencyConverterFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public Results: CurrencyRates[] = [];
  ngOnInit(): void {
    axios(
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oLf23dmp8n5z4DGEl4D6GYIsRyjJzO95KdwK4Dc9'
    ).then((response) => {
      //console.log(response.data.data);
      this.Results = response.data.data;
      console.log(this.Results);
    });
  }
  handleConversion(event: any): void {
    const { value, from, to } = event;
    const convertedValue = value * 1.2;
    console.log(`Converted value: ${convertedValue} ${to} from ${from}`);
  }
}
