import React from "react";
import {
  Skip,
  Active,
  Container,
  Select,
  Box,
} from "./style/NavigationBar.style";

const NavigationBar = () => {
  return (
    <Container>
      <Box>
        <p className="text">نمایش ۱ - ۱۰ از ۱۰</p>
        <Select>
          <p>۱۰</p>
          <img src="./assets/NavigationBar/down.svg" alt="" />
        </Select>
      </Box>

      <Box>
        <Skip>
          <img src="./assets/NavigationBar/right.svg" alt="" />
          <img src="./assets/NavigationBar/right.svg" alt="" />
        </Skip>
        <Skip>
          <img src="./assets/NavigationBar/right.svg" alt="" />
        </Skip>
        <Active>۱</Active>
        <p className="box">۲</p>
        <p className="box">...</p>
        <Skip>
          <img src="./assets/NavigationBar/left.svg" alt="" />
        </Skip>
        <Skip>
          <img src="./assets/NavigationBar/left.svg" alt="" />
          <img src="./assets/NavigationBar/left.svg" alt="" />
        </Skip>
      </Box>
    </Container>
  );
};

export default NavigationBar;
