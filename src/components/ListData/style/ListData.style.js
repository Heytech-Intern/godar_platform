import styled from "styled-components";

const Table = styled.section`
  width: 1240px;
  margin: 200px auto;
  background-color: ${({ theme }) => theme.BgColors.frames};
`;

const Header = styled.div`
  width: 1080px;
  margin: auto;
  background: linear-gradient(
    90deg,
    rgba(234, 234, 238, 0.4) 0%,
    rgba(234, 234, 238, 0.4) 100%
  );
  border-radius: 8px 8px 0px 0px;
`;

const Title = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

const Checkbox = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 18px 0 30px;
  cursor: pointer;
  display: ${(props) => (props.hasCheckbox === true ? "block" : "none")};
`;

const Row = styled.div`
  display: flex;
`;

const Flex = styled.ul`
  display: flex;
  width: 100%;
  & > li {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
  }
  & > li:nth-of-type(1) {
    margin-left: 90px;
  }
  & > li:nth-of-type(2) {
    margin-left: 133px;
  }
  & > li:nth-of-type(3) {
    margin-left: 117px;
  }
  & > li:nth-of-type(4) {
    margin-left: 112px;
  }
  & > li:nth-of-type(5) {
    margin-left: 89px;
  }
`;

const List = styled.li`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.TextColors.Title};
`;

const ListBody = styled.section`
  width: 1080px;
  margin: auto;
  /* background: linear-gradient( 90deg, rgba(234,234,238,0.4) 0%, rgba(234,234,238,0.4) 100% ); */
  border-radius: 8px 8px 0px 0px;
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OrderList = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(234, 234, 238, 0.4);
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
`;

const Name = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;
  & > li {
    font-weight: 400;
    font-size: 11px;
    line-height: 19px;
  }
`;

const Specifications = styled.ul`
  display: flex;
  width: 740px;
  & > li {
    font-weight: 400;
    font-size: 11px;
    line-height: 19px;
  }
  & > li:nth-of-type(1) {
    margin-left: 100px;
  }
  & > li:nth-of-type(2),
  li:nth-of-type(3) {
    margin-left: 98px;
  }
  & > li:nth-of-type(4) {
    margin-left: 106px;
  }
  & > li:nth-of-type(5) {
    margin-left: 54px;
    color: ${(props) =>
      props.checked === true ? "rgba(45, 165, 45, 1)" : "rgba(213, 0, 0, 1)"};
  }
`;

const Tools = styled.ul`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: center;
  & > img:nth-of-type(2) {
    padding: 0 15px;
  }
  & > img:nth-of-type(3) {
    display: ${(props) => (props.hasTrash === true ? "block" : "none")};
  }
`;

export {
  Table,
  Header,
  Title,
  Checkbox,
  Row,
  Flex,
  List,
  ListBody,
  Orders,
  OrderList,
  Menu,
  Name,
  Specifications,
  Tools,
};
