import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h2`
  color: #ffffff;
  font-weight: 700;
  font-size: ${({ size }) =>
    size === "lg" ? "4rem" : size === "xl" ? "8rem" : "3rem"};
  padding: ${({ px }) => px && "0 20px"};
`;

Heading.propTypes = {
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: "3rem",
};

export default Heading;
