import PropTypes from 'prop-types';

import { ButtonBase } from './Button.styled';

const Button = ({
  children,
  className,
  onClick,
  ...rest
}) => (
  <ButtonBase onClick={onClick} className={className} {...rest}>
    {children}
  </ButtonBase>
);

Button.defaultProps = {
  className: '',
  onClick: () => {},
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;