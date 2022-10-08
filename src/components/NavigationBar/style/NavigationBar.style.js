import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "IRANSans";
`;

const Skip = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(238, 234, 235, 0.4);
  border-radius: 8px;
  margin-right: 14px;
  cursor: pointer;
  font-family: "IRANSans";
`;
const Active = styled.p`
  background: linear-gradient(180deg, #eeeaeb 0%, #f8f7f7 0%, #5dccbf 0%);
  box-shadow: 0px 4px 16px 0px #eaeaee80;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 24px;
  height: 24px;
  margin-right: 14px;
  color: #fff;
  cursor: pointer;
  font-size: 11px;
  font-family: "IRANSans";
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "IRANSans";
  & > .text {
    color: #3e3f44de;
    font-weight: 700;
    font-size: 11px;
    line-height: 19px;
    cursor: default;
    font-family: "IRANSans";
  }

  & > .box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    font-family: "IRANSans";
  }
`;

const Select = styled.div`
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, rgba(62, 63, 68, 0.87), rgba(62, 63, 68, 0.87));
  border: 1px solid rgba(62, 63, 68, 0.87);
  border-radius: 8px;
  width: 53px;
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 8px;
  font-family: "IRANSans";

  & > p {
    color: #3e3f44de;
    font-family: "IRANSans";
    font-weight: 700;
    font-size: 11px;
    line-height: 19px;
  }
`;

export { Skip, Active, Container, Select, Box };
