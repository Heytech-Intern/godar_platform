import React from 'react'

import { Container } from './style/ChannelFilterInput.style'

const ChannelFilterInput = ({children,text}) => {
  return (
    <Container className='input'>
      {children}
    </Container>
  )
}

export default ChannelFilterInput