import styled from "styled-components";

export const DeleteCard = styled.div`
  position: absolute;
  top: 45%;
  left: 40%;
  z-index: 10;
  width: 300px;
  padding: 8px 12px;
  border-top: 2px solid #d50000;
  background: #ffffff;
  box-shadow: 0px 4px 8px 2px rgb(73 73 73 / 25%);
  border-radius: 0px 0px 8px 8px;
`;
export const Icon = styled.div`
  background-color: #d50000;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: -32px auto 0 auto;
`;
export const Img = styled.img`
  width: 23px;
  height: 22.75px;
  margin: 12px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: rgba(62, 63, 68, 0.87);
  padding-top: 14px;
  font-style: normal;
  text-align: center;
`;

export const Description = styled.p`
  font-family: "IRANSans";
  font-style: normal;
  line-height: 17px;
  text-align: center;
  color: rgba(62, 63, 68, 0.6);
  font-weight: 400;
  font-size: 10px;
  line-height: 17px;
  padding: 20px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeletButton = styled.button`
  width: 134px;
  height: 36px;
  background: #d50000;
  border-radius: 4px;
  border: none;
  color: white;
`;

export const RefuseButton = styled.button`
  width: 134px;
  height: 36px;
  color: rgba(62, 63, 68, 0.4);
  border: none;
`;
