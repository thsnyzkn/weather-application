import styled from "styled-components";
import PropTypes from "prop-types";

const SvgWrapper = styled.div`
  width: ${({ size }) => (size === "big" ? "225px" : "75px")};
  height: ${({ size }) => (size === "big" ? "225px" : "75px")};
  margin-bottom: 20px;
`;
SvgWrapper.propTypes = {
  size: PropTypes.string,
};

SvgWrapper.defaultProps = {
  size: "small",
};
export default SvgWrapper;
