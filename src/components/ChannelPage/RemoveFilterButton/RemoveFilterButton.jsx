import React from 'react'
import { Container } from './style/RemoveFilterButton.style'


const RemoveFilterButton = ({children,click,toggle}) => {
  return (
    <Container toggle={toggle} onClick={click} >{children}</Container>
  )
}

export default RemoveFilterButton