import styled from "styled-components";
import PropTypes from "prop-types";

const UpperSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 75px;
  padding-bottom: 75px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

UpperSection.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UpperSection;
