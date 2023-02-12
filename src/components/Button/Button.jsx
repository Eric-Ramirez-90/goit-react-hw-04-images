import PropTypes from 'prop-types';
import { ButtonComponent, Container } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Container>
      <ButtonComponent type="button" onClick={onClick}>
        Load more
      </ButtonComponent>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
