import PropTypes from 'prop-types';

import { getTypeFromCardNumber } from '../../utils/utils';
import { CardContainer, Logo, Chip, CardNumber, CardHolder, ExpirationDate } from './CardStyled';

const Card = ({
  cardNumber,
  cardHolder,
  expirationMonth,
  expirationYear
}) => {
  const cardType = getTypeFromCardNumber(cardNumber) || 'visa';

  return (
    <CardContainer>
      <Chip src="../../assets/chip.png" />
      <Logo src={`../../assets/card-logos/${cardType}.png`} />
      <CardNumber>{cardNumber}</CardNumber>
      <CardHolder>{cardHolder}</CardHolder>
      <ExpirationDate>{`${expirationMonth}/${expirationYear}`}</ExpirationDate>
    </CardContainer>
  );
};

Card.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  cardHolder: PropTypes.string.isRequired,
  expirationMonth: PropTypes.string.isRequired,
  expirationYear: PropTypes.string.isRequired,
}

export default Card;

//       <Chip src={`${process.env.PUBLIC_URL}/chip.png`} />
