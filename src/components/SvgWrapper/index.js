import styled from "styled-components";

const SvgWrapper = styled.div`
  width: ${({ size }) => (size === "big" ? "225px" : "75px")};
  height: ${({ size }) => (size === "big" ? "225px" : "75px")};
  margin-bottom: 20px;
`;

export default SvgWrapper;
