import React from 'react'

import { Container, Tag } from './style/SelectBox.style'

const SelectBox = () => {
  return (
    <Container>
        <div className='tag'>
            <Tag> <p>SYSTEM</p> <img src="./assets/ChannelManage/remove.svg" alt="" /></Tag>
            <Tag> <p>INQUERY</p> <img src="./assets/ChannelManage/remove.svg" alt="" /></Tag>
        </div>
        <img className='drop-down' src="./assets/ChannelManage/down.svg" alt="" />

    </Container>
  )
}

export default SelectBox