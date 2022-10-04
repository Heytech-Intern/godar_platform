import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  line-height: 24px;
  outline: none;
  font: inherit;
  color: #fff;
  padding: 10px;
  border: 1.5px solid #00aa8d;
  cursor: pointer;
  font-size: 14px;
  z-index: 5;
  color: ${({ theme }) => theme.BtnColors.secondary};
`;

const MultitaskBtn = styled(Btn)`
  background: ${({ theme }) => theme.BtnColors.primary};
  width: 189px;
  height: 48px;
`;
const CancelBtn = styled(Btn)`
  width: 111px;
  height: 48px;
  background: ${({ theme }) => theme.BgColors.frames};
  color: ${({ theme }) => theme.BtnColors.primary};
`;
const DeletBtn = styled(Btn)`
  width: 134px;
  height: 36px;
  background: ${({ theme }) => theme.BtnColors.delet};
  color: ${({ theme }) => theme.BtnColors.secondary};
`;
const RefuseBtn = styled(Btn)`
  width: 134px;
  height: 36px;
  background: ${({ theme }) => theme.BtnColors.secondary};
  color: ${({ theme }) => theme.TextColors.Tertiary};
`;
const ConfirmBtn = styled(Btn)`
  width: 62px;
  height: 36px;
  background: ${({ theme }) => theme.BgColors.frames};
  color: ${({ theme }) => theme.BtnColors.primary};
`;

const GroupOprationBtn = styled(Btn)`
  background: ${({ theme }) => theme.BtnColors.primary};
  width: 175px;
  height: 44px;
`;
export {
  Btn,
  MultitaskBtn,
  CancelBtn,
  GroupOprationBtn,
  ConfirmBtn,
  DeletBtn,
  RefuseBtn,
};
