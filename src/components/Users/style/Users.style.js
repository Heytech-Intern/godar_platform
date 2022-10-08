import styled from "styled-components";

const Container = styled.section`
  width: 1240px;
  height: 70px;
  margin: auto;
  background-color: ${({ theme }) => theme.BgColors.frames};
`;

const FilterHeader = styled.div`
  width: 1080px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  & > h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #014d40;
  }
`;

const Filters = styled.div`
  height: 100%;
`;

const FilterList = styled.ul`
  display: flex;
  height: 100%;
  & > li {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    & > img:nth-of-type(1) {
      width: 24px;
      height: 24px;
    }
    & > img:nth-of-type(2) {
      width: 24px;
      height: 26px;
    }
    & > img:nth-of-type(3) {
      width: 22px;
      height: 22px;
    }
  }
  & > li:nth-of-type(2) {
    padding: 0 25px;
  }
`;

export { Container, FilterHeader, Filters, FilterList };
