import { forwardRef } from 'react';

import { Label, LabelText, SelectBase, Option } from './Select.styled';

const Select = forwardRef(({ label, name, options, ...rest }, ref) => (
  <Label>
    <LabelText>{label}</LabelText>
    <SelectBase name={name} ref={ref} {...rest}>
      {options.map(option => (
        <Option value={option} key={option}>{option}</Option>
      ))}
    </SelectBase>
  </Label>
));

export default Select;
