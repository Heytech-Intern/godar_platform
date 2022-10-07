import React from 'react'

import { Container } from './style/FilteredTags.style'

const FilteredTags = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default FilteredTags