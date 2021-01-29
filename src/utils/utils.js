const CARD_PATTERNS = {
  visa: '^4',
  mastercard: '^5[1-5]',
  amex: '^(34|37)',
  diners: '^(30[0-5]|36)',
  discover: '^6011',
  unionpay: '^62',
  troy: '^9792',
};

export const getTypeFromCardNumber = cardNumber =>
  Object.keys(CARD_PATTERNS)
    .find(cardName => {
      const regex = new RegExp(CARD_PATTERNS[cardName]);

      return regex.test(`${cardNumber}`);
    })