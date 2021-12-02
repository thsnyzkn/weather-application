import styled from "styled-components";
import PropTypes from "prop-types";

const HeadingOverLine = styled.span`
  font-size: ${({ size }) =>
    size === "lg" ? "3rem" : size === "xl" ? "5rem" : "2rem"};
  color: #a8aabd;
  margin-bottom: 25px;
`;

HeadingOverLine.propTypes = {
  size: PropTypes.string,
};

HeadingOverLine.defaultProps = {
  size: "2rem",
};

export default HeadingOverLine;
