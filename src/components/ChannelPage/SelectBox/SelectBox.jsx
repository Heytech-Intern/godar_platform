import React,{useState} from 'react'

import { Container, Tag } from './style/SelectBox.style'
import { selectBoxInit } from '../../../partials/channel-initial-state'

const SelectBox = () => {
  const [selected, setSelected] = useState(selectBoxInit)

  const removeSelectedHandler = (id) =>{
    const cloneSelected = [...selected];
    const newSelected = cloneSelected.filter((item, index) => index !== id);

    setSelected(newSelected);
  }
  
  return (
    <Container>
        <div className='tag'>
          {
            selected.map((item,index) => {
              return (
                  <Tag key={index}> 
                    <p>{item.title}</p> 
                    <img onClick={() => removeSelectedHandler(index)} src="./assets/ChannelManage/remove.svg" alt="remove-icon" />
                  </Tag>
              )
            })
          }
        </div>
        <img className='drop-down' src="./assets/ChannelManage/down.svg" alt="drop-down-icon" />

    </Container>
  )
}

export default SelectBox