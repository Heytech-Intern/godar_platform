import styled from "styled-components";

export const WarningCard = styled.div`
  position: absolute;
  top: 45%;
  left: 40%;
  z-index: 20;
  width: 300px;
  padding: 8px 12px;
  box-shadow: 0px 4px 8px 2px rgba(73, 73, 73, 0.25);
  border-top: 2px solid #038175;
  border-radius: 8px;
  background-color: white;
`;
export const Icon = styled.div`
  background-color: #038175;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: -32px auto 0 auto;
`;
export const Img = styled.img`
  width: 23px;
  height: 22.75px;
  margin: 8px 12px 0 12px;
`;
export const Txt = styled.img`
  width: 28px;
  height: 8px;
  margin: auto;
  display: block;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: rgba(62, 63, 68, 0.87);
  padding-top: 20px;
  padding-bottom: 12px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  text-align: right;
  color: rgba(62, 63, 68, 0.6);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  width: 62px;
  height: 36px;
  border: 1px solid #038175;
  border-radius: 4px;
  margin-top: 6px;
  background: none;
`;
