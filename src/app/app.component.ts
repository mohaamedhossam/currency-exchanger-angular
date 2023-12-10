import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {
  CurrencyConverterService,
  currencyConverterServiceFactory,
} from './currency-converter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [
    {
      provide: CurrencyConverterService,
      useFactory: currencyConverterServiceFactory,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    public currencyConverterService: CurrencyConverterService,
    private router: Router
  ) {}
  title = 'currency-exchanger-angular';
  handleDefault(input: string) {
    this.currencyConverterService.setToCurrency(input);
    this.currencyConverterService.setFromCurrency('USD');
    this.currencyConverterService.setAmount(1);
    this.router.navigate(['./details']);
  }
}
