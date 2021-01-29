import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Card from '../Card/Card';
import { CardsList, Text } from './Cards.styled';

const Cards = () => {
  const cards = JSON.parse(localStorage.getItem('cards'));

  return (
    <CardsList>
      <Link to="/cards/add">
        <Button>Add new card</Button>
      </Link>
      {cards && cards.length > 0 ? (
        cards.map(card => (
          <Link to={`/cards/${card.id}/edit`}>
            <Card key={card.number} {...card} />
          </Link>
        ))
      ) : (
        <Text>No credit cards available</Text>
      )}
    </CardsList>
  );
};

export default Cards;
