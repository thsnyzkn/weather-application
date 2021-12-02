import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  height: 245px;
  color: ${({ theme }) => theme.colors.headingTextColor};
`;
Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
