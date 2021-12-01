import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  justify-content: ${({ justify }) =>
    justify === "between"
      ? "space-between"
      : justify === "around"
      ? "space-around"
      : "space-evenly"};
`;

export default Flex;
