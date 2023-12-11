export class CurrencyConverterService {
  private toCurrency: string = 'EUR'; // Default to EUR
  private fromCurrency: string = 'USD'; // Default to USD
  private amount: number = 1; // Default amount
  private currencyData: { [currency: string]: number } = {};

  constructor() {}

  setToCurrency(toCurrency: string): void {
    this.toCurrency = toCurrency;
  }

  setFromCurrency(fromCurrency: string): void {
    this.fromCurrency = fromCurrency;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }
  setCurrencyData(data: { [currency: string]: number }): void {
    this.currencyData = data;
  }

  getToCurrency(): string {
    return this.toCurrency;
  }

  getFromCurrency(): string {
    return this.fromCurrency;
  }

  getAmount(): number {
    return this.amount;
  }
  getCurrencyData(): { [currency: string]: number } {
    return this.currencyData;
  }
}

let currencyConverterService: CurrencyConverterService | null = null;

export function currencyConverterServiceFactory(): CurrencyConverterService {
  if (!currencyConverterService) {
    currencyConverterService = new CurrencyConverterService();
  }
  return currencyConverterService;
}
