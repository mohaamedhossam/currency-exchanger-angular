import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-converter-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter-form.component.html',
  styleUrls: ['./currency-converter-form.component.css'],
})
export class CurrencyConverterFormComponent {
  @Input() initialValue: number = 1;
  @Input() fromCurrency: string = 'USD';
  @Input() toCurrency: string = 'EUR';
  @Input() currencyOptions: string[] = ['EUR', 'JPY', 'CYN'];
  @Output() convertCurrency = new EventEmitter<{
    value: string;
    from: string;
    to: string;
  }>();

  onChange(event: any): void {
    this.convertCurrency.emit({
      value: event.target.value,
      from: this.fromCurrency,
      to: this.toCurrency,
    });
    // console.log(this.value, this.fromCurrency);
  }

  handleConvert(): void {
    // Implement your conversion logic here
    // Update the converted value and emit the output
  }
}
