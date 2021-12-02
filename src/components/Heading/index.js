import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  font-size: ${({ size, theme }) =>
    size === "lg"
      ? theme.fontSizes.headingLg
      : size === "xl"
      ? theme.fontSizes.headingXl
      : theme.fontSizes.headingM};
  padding: ${({ px }) => px && "0 20px"};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

Heading.propTypes = {
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: "m",
};

export default Heading;
