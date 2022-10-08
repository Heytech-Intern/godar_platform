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
        <p className="text">نمایش 1 - 10 از 10</p>
        <Select>
          <p>10</p>
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
        <Active>1</Active>
        <p className="box">2</p>
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
