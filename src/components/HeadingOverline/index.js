import styled from "styled-components";
import PropTypes from "prop-types";
/* const HeadingOverline = ({ title, size }) => {
  return (
    <span style={{ fontSize: size === "big" ? "3rem" : "" }}>{title}</span>
  );
};

HeadingOverline.propTypes = {
  children: PropTypes.node.isRequired,
};
 */

const HeadingOverLine = styled.span`
  font-size: ${({ size }) =>
    size === "lg" ? "3rem" : size === "xl" ? "5rem" : "2rem"};
  color: #a8aabd;
  margin-bottom: 25px;
`;

export default HeadingOverLine;
