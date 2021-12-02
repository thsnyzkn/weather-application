import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ size, theme }) =>
    size === "lg"
      ? theme.fontSizes.headingLg
      : size === "xl"
      ? theme.fontSizes.headingXl
      : theme.fontSizes.headingM};
  padding: ${({ px }) => px && "0 20px"};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

Heading.propTypes = {
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: "m",
};

export default Heading;
