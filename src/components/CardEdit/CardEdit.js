import { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

import { formConfig, defaultValues } from './constants';
import { Container, Form, ErrorMessage } from './CardEdit.styled';

const CardEdit = () => {
  const { id } = useParams();
  const history = useHistory();

  const savedCards = JSON.parse(localStorage.getItem('cards'));
  const formValues = id ? savedCards.find(card => card.id === +id) : defaultValues

  const { register, handleSubmit, watch, errors, formState } = useForm({
    defaultValues: formValues,
    mode: 'onBlur',
  });

  const onSubmit = useCallback(data => {
    const previousCards = JSON.parse(localStorage.getItem('cards')) || [];
    const currentCard = { id: previousCards.length + 1, ...data };

    const newCards = id
      ? previousCards.map(card => card.id === id ? currentCard : card)
      : [...previousCards, currentCard]

    localStorage.setItem('cards', JSON.stringify(newCards));
    history.replace('/cards');
  }, [id, history]);

  // TODO: validation

  return (
    <Container>
      <Card {...watch()}/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...formConfig.cardNumber} ref={register({ pattern: /^\d{16}$/ })} />
        {errors.cardNumber && <ErrorMessage>Please enter a valid card number</ErrorMessage>}

        <Input {...formConfig.cardHolder} ref={register({ min: 2, max: 64 })} />
        {errors.cardHolder && <ErrorMessage>Please enter a valid name</ErrorMessage>}

        <Select {...formConfig.expirationMonth} ref={register} />

        <Select {...formConfig.expirationYear} ref={register} />

        <Button
          disabled={!formState.isDirty || !formState.isValid}
          onClick={handleSubmit(onSubmit)}
          type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default CardEdit;
