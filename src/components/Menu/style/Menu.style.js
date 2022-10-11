import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  left: 0;
  margin-top: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 58px;
  padding: 8px;
  height: 154px;
  background: #fff;

  & > div:forst-of-type {
    margin-top: 0;
  }
`;
const Box = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: #f6f5f3;
  border-radius: 8px;
  margin-top: 6px;
  cursor: pointer;
`;

export { Container, Box };
