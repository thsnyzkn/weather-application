import styled from "styled-components";
import PropTypes from "prop-types";

const HeadingOverLine = styled.span`
  font-size: ${({ size, theme }) =>
    size === "lg"
      ? theme.fontSizes.textLg
      : size === "xl"
      ? theme.fontSizes.textXl
      : theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.headingOverlineColor};
  margin-bottom: ${({ smallMargin }) => (smallMargin ? "15px" : "25px")};
`;

HeadingOverLine.propTypes = {
  size: PropTypes.string,
};

HeadingOverLine.defaultProps = {
  size: "2rem",
};

export default HeadingOverLine;
