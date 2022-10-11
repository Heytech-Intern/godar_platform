import styled from "styled-components";

const Table = styled.section`
  width: 1240px;
  margin: auto;
  border-radius: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
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
  width: 100%;
  align-items: center;
`;

const Div = styled.div`
  height: 100%;
  display: flex;
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
  width: 100px;
  height: 100%;
  flex: 0 0 80%;
`;

const Flex = styled.ul`
  display: grid;
  grid-template-columns: ${(props) =>
    props.location.pathname === "/channelmanage"
      ? "80px 82px 70px 65px 75px 68px 68px"
      : "90px 80px 70px 65px 75px 45px"};
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const List = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
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
  padding-bottom: 24px;
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
  display: grid;
  grid-template-columns: ${(props) =>
    props.location.pathname === "/channelmanage"
      ? "80px 82px 70px 65px 75px 68px 68px"
      : "90px 80px 70px 65px 75px 45px"};
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > li {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 11px;
    height: 25px;
    line-height: 19px;
  }
`;
const Condition = styled.li`
  color: ${(props) =>
    props.checked === true ? "rgba(45, 165, 45, 1)" : "rgba(213, 0, 0, 1)"};
  background: rgba(250, 250, 250, 0.4);
  box-shadow: 0px 0px 4px rgb(0 0 0 / 9%);
  border-radius: 4px;
  width: 90%;
  height: 25px;
  justify-content: center;
`;

const Tools = styled.ul`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
  margin-right: 30px;
  & > img {
    cursor: pointer;
  }
  & > img:nth-of-type(2) {
    padding: 0 15px;
  }
`;

const Topic = styled.div`
  margin: auto;
  width: 1080px;
  padding-top: 18px;
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
`;

const TopicWrapper = styled(Topic)`
  justify-content: left;
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
  Topic,
  TopicWrapper,
  Div,
  Condition,
};
