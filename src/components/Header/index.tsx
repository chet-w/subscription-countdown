import { Container } from "../Container";
import { HeaderProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";

export function Header(props: HeaderProps) {
  return (
    <S.Header>
      <Container>
        <Heading level="2" accent>
          Bread
        </Heading>
      </Container>
    </S.Header>
  );
}
