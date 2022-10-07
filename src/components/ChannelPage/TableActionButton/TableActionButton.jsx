import React from 'react'
import { Container } from './style/TableActionButton.style'

const TableActionButton = ({children,active = false}) => {
  return (
    <Container active={active}>{children}</Container>
  )
}

export default TableActionButton