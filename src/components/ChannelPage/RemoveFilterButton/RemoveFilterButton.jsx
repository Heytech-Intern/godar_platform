import React from 'react'
import { Container } from './style/RemoveFilterButton.style'


const RemoveFilterButton = ({children,click}) => {
  return (
    <Container onClick={click} >{children}</Container>
  )
}

export default RemoveFilterButton