import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents isBlack />
      <BoxWithStyledComponents isBlack />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
