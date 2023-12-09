import { Component, Input } from '@angular/core';
import { CurrencyConverterFormComponent } from '../../currency-converter-form/currency-converter-form.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyConverterFormComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() Amount: number = 1;
}
