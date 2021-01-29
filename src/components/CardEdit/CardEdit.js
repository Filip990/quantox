import { useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

import { formConfig, defaultValues } from './constants';
import { Container, Form } from './CardEdit.styled';

const CardEdit = () => {
  const { id } = useParams();
  const location = useLocation();

  const { register, handleSubmit, watch /*, errors */ } = useForm({ defaultValues });

  const onSubmit = useCallback(data => {
    const previousCards = localStorage.getItem('cards') || [];
    const currentCard = { id: previousCards.length + 1, ...data };

    const newCards = id
      ? previousCards.map(card => card.id === id ? currentCard : card)
      : [...previousCards, currentCard]

    localStorage.setItem('cards', JSON.stringify(newCards));
    location.replace();
  }, [id, location]);

  // TODO: validation

  return (
    <Container>
      <Card {...watch()}/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...formConfig.cardNumber} ref={register} />
        <Input {...formConfig.cardHolder} ref={register} />
        <Select {...formConfig.expirationMonth} ref={register} />
        <Select {...formConfig.expirationYear} ref={register} />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>Save</Button>
      </Form>
    </Container>
  );
};

export default CardEdit;
