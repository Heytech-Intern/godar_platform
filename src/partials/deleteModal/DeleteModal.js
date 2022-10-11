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

const DeleteModal = ({ handleConfirm, setActiveModal }) => {
  return (
    <DeleteCard>
      <Icon>
        <Img src="/assets/img/trash.svg" alt="trash" />
      </Icon>
      <Title>حذف کاربر 0076786643</Title>
      <Description> آیا از حذف کاربر 0076786643 اطمینان دارید؟</Description>
      <Wrapper>
        <DeletButton onClick={handleConfirm}>حذف</DeletButton>
        <RefuseButton onClick={() => setActiveModal(false)}>
          انصراف
        </RefuseButton>
      </Wrapper>
    </DeleteCard>
  );
};

export default DeleteModal;
