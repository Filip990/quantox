import { forwardRef } from 'react';

import { Label, LabelText, InputBase } from './Input.styled';

const Input = forwardRef(({ label, name, ...rest }, ref) => (
  <Label>
    <LabelText>{label}</LabelText>
    <InputBase name={name} ref={ref} {...rest} />
  </Label>
));

export default Input;
