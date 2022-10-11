import { useState } from "react";
import {
  WarningCard,
  Icon,
  Img,
  Txt,
  Title,
  Description,
  Button,
  Wrapper,
} from "./style/warningModal";

const WarningModal = ({ isClicked, setIsClicked }) => {
  return (
    <>
      {isClicked && (
        <WarningCard>
          <Icon>
            <Img src="/assets/img/Goar-icon.svg" alt="icon" />
            <Txt src="/assets/img/godar-text.svg" alt="txt" />
          </Icon>
          <Title>حذف کاربر 0076786643</Title>
          <Description>
            امکان حذف این کاربر به این دلیل که مالک بنگاه/مدیرعامل میباشد، وجود
            ندارد!
          </Description>
          <Wrapper>
            <Button onClick={() => setIsClicked(false)}>تایید</Button>
          </Wrapper>
        </WarningCard>
      )}
    </>
  );
};

export default WarningModal;
