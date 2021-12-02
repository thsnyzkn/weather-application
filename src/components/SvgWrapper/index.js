import styled from 'styled-components';
import PropTypes from 'prop-types';

const SvgWrapper = styled.div`
  width: ${({ size }) => (size === 'big' ? '225px' : '75px')};
  height: ${({ size }) => (size === 'big' ? '225px' : '75px')};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
    width: ${({ size }) => (size === 'big' ? '125px' : '35px')};
    height: ${({ size }) => (size === 'big' ? '125px' : '35px')};
  }
`;
SvgWrapper.propTypes = {
  size: PropTypes.string,
};

SvgWrapper.defaultProps = {
  size: 'small',
};
export default SvgWrapper;
