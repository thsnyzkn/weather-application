import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
  justify-content: ${({ justify }) =>
    justify === 'between'
      ? 'space-between'
      : justify === 'around'
      ? 'space-around'
      : 'space-evenly'};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
Flex.propTypes = {
  direction: PropTypes.string,
};
Flex.defaultProps = {
  weathers: [],
};
export default Flex;
