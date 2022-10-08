import React from "react";
import {
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
} from "./style/Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Wrap>
            <ItemImg>
              <img src="./assets/Header/godar-text.svg" alt="godar-text" />
              <img src="./assets/Header/godar-icon.svg" alt="godar-icon" />
              <img src="./assets/Header/message.svg" alt="message-icon" />
            </ItemImg>
            <Profile>
              <img src="./assets/Header/User.svg" alt="user-icon" />
              <ItemText>
                <h2>فاطمه محمدزاده</h2>
                <p>مدیر سامانه</p>
              </ItemText>
            </Profile>
          </Wrap>
        </Wrapper>
        <QuickMenu>
          <MenuWrap>
            <Vector>
              <img src="./assets/Header/Vector.svg" alt="vector-icon" />
            </Vector>
            <Nav>
              <ul>
                <li>
                  <a href="#">داشبورد</a>
                </li>
                <li>
                  <a href="#">مدیریت کانال ها</a>
                </li>
                <li>
                  <a href="#">مدیریت دسترسی ها</a>
                </li>
                <li>
                  <a href="#">دیدبان</a>
                </li>
                <li>
                  <a href="#">معرفی سرویس</a>
                </li>
              </ul>
            </Nav>
          </MenuWrap>
        </QuickMenu>
        <AddressBar>
          <AddressWrap>
            <ul>
              <li>صفحه اصلی</li>
              <li>مدیریت کاربران</li>
            </ul>
            <p>
              برای مدیریت کاربران و مشاهده اطلاعات کامل آن ها از این قسمت
              استفاده کنید
            </p>
          </AddressWrap>
        </AddressBar>
      </Container>
    </StyledHeader>
  );
};
