import styled from "styled-components";

const Container = styled.main`
  width: "100%";
  background: #e3e3e3;
  padding: 66px 100px;
`;

const Filter = styled.section`
  max-width: 1240px;
  padding: 18px 80px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 12px;
  border-radius: 8px;

  & > .show {
    display: block;
  }
`;

const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ filterr }) => (filterr ? "18px" : "0")};
  border-bottom: ${({ filterr }) =>
    filterr ? "1px solid rgba(234, 234, 238, 0.4)" : "none"};

  & > h2 {
    margin-bottom: 0;
    justify-self: flex-start;
    font-family: IRANSans;
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    color: #014d40;
  }

  & > div {
  }

  & > div > span {
    margin-right: 26px;
  }

  & > div > span > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const FilterBody = styled.div`
  display: none;

  & > .filter-body-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    color: rgba(62, 63, 68, 0.87);
    margin-bottom: 20px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(234, 234, 238, 0.4);
  }

  & > section {
    margin-bottom: 34px;
  }

  & > section:nth-of-type(3) {
    margin-bottom: 30px;
  }

  & > section:last-of-type {
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 18px;
    border-top: 1px solid rgba(234, 234, 238, 0.4);
  }
`;

const Content = styled.article`
  max-width: 1240px;
  padding: 18px 80px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;

  & > .bottom-nav {
    justify-content: flex-end;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  background: #f6f5f3;
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 8px;
  padding: 9px 12px;

  & > pre {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: rgba(62, 63, 68, 0.87);
  }

  & > img {
    width: 11px;
    height: 11px;
    margin-right: 12px;
    cursor: pointer;
  }
`;

const Flex = styled.section`
  max-width: 1080px;
  display: flex;
  align-items: center;
  margin-top: ${({ table }) => (table ? "14px" : "0")};
  margin-bottom: ${({ table }) => (table ? "24px" : "0")};

  justify-content: ${({ space }) => (space ? "space-between" : "	flex-start")};

  & > .status {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    width: 116px;
  }

  & > .filter-tag {
    margin-top: 8px;
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    width: 136px;
  }

  & > .input {
    margin-right: 82.5px;
  }

  & > .input:nth-of-type(1) {
    margin-right: 0;
  }

  & > input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7c8594;
  }
`;

export { Container, Filter, Content, FilterHeader, Tag, Flex, FilterBody };
