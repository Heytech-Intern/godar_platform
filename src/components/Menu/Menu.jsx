import React from 'react'

import { Container, Box } from './style/Menu.style'

const Menu = () => {
  return (
    <Container>
        <Box><img src="./assets/Menu/home-Regular.svg" alt="left-menu__menu-icon" /></Box>
        <Box><img src="./assets/Menu/shield-Regular.svg" alt="left-menu__shield-icon" /></Box>
        <Box><img src="./assets/Menu/users-three-Regular.svg" alt="left-menu__share-icon" /></Box>
    </Container>
  )
}

export default Menu