export function currencyConvertor(number: number): string {
    // Use regex to add thousand separators
    const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formattedNumber;
}
