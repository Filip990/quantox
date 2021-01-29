import Button from '../Button/Button';
import Card from '../Card/Card';
import { CardsList, CardLink, Text } from './Cards.styled';

const Cards = () => {
  const cards = JSON.parse(localStorage.getItem('cards'));

  return (
    <CardsList>
      <CardLink to="/cards/add">
        <Button>Add new card</Button>
      </CardLink>
      {cards && cards.length > 0 ? (
        cards.map(card => (
          <CardLink key={card.cardNumber} to={`/cards/${card.id}/edit`}>
            <Card {...card} />
          </CardLink>
        ))
      ) : (
        <Text>No credit cards available</Text>
      )}
    </CardsList>
  );
};

export default Cards;
