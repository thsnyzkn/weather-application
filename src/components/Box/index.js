import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  height: 220px;
  color: white;
`;
Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
