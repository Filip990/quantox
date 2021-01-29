import styled from 'styled-components';

export const ButtonBase = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #0066ff;
  border-radius: 4px;
  background: #0066ff;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover,
  :focus {
    background: #ffffff;
    color: #0066ff;
  }
`;

// TODO: disabled styles
