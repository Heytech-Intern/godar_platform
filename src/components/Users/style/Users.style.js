import styled from "styled-components";

const Container = styled.section`
  width: 1240px;
  height: auto;
  margin: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.BgColors.frames};
`;

const FilterHeader = styled.div`
  width: 1080px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  & > h2 {
    display: flex;
    align-items: center;
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
      cursor: pointer;
    }
    & > img:nth-of-type(2) {
      width: 24px;
      height: 26px;
      cursor: pointer;
    }
    & > img:nth-of-type(3) {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
  & > li:nth-of-type(2) {
    padding: 0 25px;
  }
`;

const FilterBody = styled.div`
  width: 1080px;
  margin: auto;
  & > h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    color: rgba(62, 63, 68, 0.87);
  }
`;

const Form = styled.form`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(234, 234, 238, 0.4);
  padding-bottom: 32px;
  & > input {
    width: 305px;
    height: 48px;
    border: 1px solid rgba(62, 63, 68, 0.2);
    border-radius: 8px;
    margin-top: 32px;
    padding-right: 16px;
  }
  & > select {
    width: 305px;
    height: 48px;
    border: 1px solid rgba(62, 63, 68, 0.2);
    border-radius: 8px;
    margin-top: 32px;
    padding-right: 16px;
    color: rgba(124, 133, 148, 0.6);
  }
`;

const FilterUsed = styled.div`
  padding-top: 20px;
  padding-bottom: 24px;
  & > h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: rgba(62, 63, 68, 0.87);
  }
`;

export {
  Container,
  FilterHeader,
  Filters,
  FilterList,
  FilterBody,
  Form,
  FilterUsed,
};
