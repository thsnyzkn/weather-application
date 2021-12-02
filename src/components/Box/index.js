import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  height: 245px;
  color: ${({ theme }) => theme.colors.headingTextColor};
  @media (max-width: 768px) {
    height: 275px;
  }
`;
Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
