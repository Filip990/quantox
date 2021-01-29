export const formConfig = {
  cardNumber: {
    label: 'Card Number',
    name: 'cardNumber',
  },
  cardHolder: {
    label: 'Card Holder',
    name: 'cardHolder',
  },
  expirationMonth: {
    label: 'Expiration Month',
    name: 'expirationMonth',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
  expirationYear: {
    label: 'Expiration Year',
    name: 'expirationYear',
    options: ['2021', '2022', '2023', '2024', '2025'],
  },
}

export const defaultValues = {
  cardNumber: '',
  cardHolder: '',
  expirationMonth: '1',
  expirationYear: '2021',
}