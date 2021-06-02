import { ReactElement } from 'react'
import { ContainerProps } from './types'
import * as S from "./styles"

export function Container(props: ContainerProps): ReactElement {
  return (
    <S.Container>
      {props.children}
    </S.Container>
  )
};
