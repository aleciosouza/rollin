const Utils = {
  formatToCurrency: (
    amount: number,
    lang: string = "pt-br",
    currency = "BRL"
  ) =>
    new Intl.NumberFormat(lang, {
      style: "currency",
      currency,
    }).format(amount),
};

export default Utils;
