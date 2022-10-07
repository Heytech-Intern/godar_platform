import React from 'react'

import { Container } from './style/StatusBar.style'

const StatusBar = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default StatusBar