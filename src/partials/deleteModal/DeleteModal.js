import { useState } from "react";
import {
  DeleteCard,
  Icon,
  Img,
  Title,
  Description,
  DeletButton,
  RefuseButton,
  Wrapper,
} from "./style/deleteModal";

const DeleteModal = () => {
  const [closeModal, setCloseModal] = useState(true);
  const closeButton = () => {
    setCloseModal(!setCloseModal);
  };
  return (
    <>
      {closeModal === true ? (
        <DeleteCard>
          <Icon>
            <Img src="/assets/img/trash.svg" alt="trash" />
          </Icon>
          <Title>حذف کاربر 0076786643</Title>
          <Description> آیا از حذف کاربر 0076786643 اطمینان دارید؟</Description>
          <Wrapper>
            <DeletButton onClick={closeButton}>حذف</DeletButton>
            <RefuseButton onClick={closeButton}>انصراف</RefuseButton>
          </Wrapper>
        </DeleteCard>
      ) : null}
    </>
  );
};

export default DeleteModal;
