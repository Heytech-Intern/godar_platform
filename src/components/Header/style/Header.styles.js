import styled from "styled-components";

const StyledHeader = styled.section`
  height: auto;
  width: 100%;
  margin-bottom: 18px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.BgColors.header};
  width: 100%;
  height: 74px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: auto;
  flex-flow: row-reverse;
`;

const MenuWrap = styled(Wrap)`
  flex-flow: row;
  justify-content: start;
  max-width: 100%;
  @media (min-width: ${({ theme }) => theme.Device.pc}) {
    max-width: 1240px;
  } ;
`;

const AddressWrap = styled(Wrap)`
  flex-flow: row;
  justify-content: start;
  & > ul {
    display: flex;
  }
  & > ul > li {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.TextColors.Tertiary};
    line-height: 24px;
    padding: 0 10px;
  }
  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.TextColors.Tertiary};
    padding-right: 10px;
    border-right: 2px solid ${({ theme }) => theme.TextColors.Tertiary};
  }
`;

const ItemImg = styled.nav`
  display: flex;
  cursor: pointer;
  direction: ltr;
  & > img:nth-of-type(1) {
    width: 85px;
    margin-right: 5px;
  }
  & > img:nth-of-type(2) {
    width: 60px;
  }
  & > img:nth-of-type(3) {
    width: 44px;
    margin-left: 22px;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ItemText = styled.div`
  & > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.TextColors.primary};
  }
  & > p {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.TextColors.primary};
  }
`;

const QuickMenu = styled.div`
  width: 100%;
  height: 63px;
  background: white;
`;

const Vector = styled.div`
  justify-content: center;
  width: 80px;
  cursor: pointer;
  display: flex;
  @media (min-width: ${({ theme }) => theme.Device.pc}) {
    justify-content: start;
    padding-right: 10px;
  } ;
`;

const Nav = styled.nav`
  width: 721px;
  & > ul {
    display: flex;
    justify-content: space-evenly;
  }
  & > ul > li > a {
    color: ${({ theme }) => theme.TextColors.secondary};
    font-weight: 500;
  }
`;

const AddressBar = styled.div`
  margin: 18px 0px;
`;

export {
  StyledHeader,
  Container,
  Nav,
  ItemImg,
  Profile,
  Wrap,
  ItemText,
  QuickMenu,
  Vector,
  MenuWrap,
  AddressBar,
  AddressWrap,
  Wrapper,
};
