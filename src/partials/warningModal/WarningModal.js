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

const WarningModal = () => {
  const [deActive, setDeActive] = useState(false);
  const closeModal = () => {
    setDeActive(!setDeActive);
  };
  return (
    <>
      {deActive === true ? (
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
            <Button onClick={closeModal}>تایید</Button>
          </Wrapper>
        </WarningCard>
      ) : null}
    </>
  );
};

export default WarningModal;
