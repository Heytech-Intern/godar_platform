import React, { useState } from "react";
import { GroupOprationBtn } from "../../partials/button";
import NavigationBar from "../NavigationBar/NavigationBar";
import {
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
  Specifications,
  Tools,
  Topic,
  TopicWrapper,
  Div,
  Condition,
} from "./style/ListData.style";
import { useLocation } from "react-router-dom";
import DeleteModal from "../../partials/deleteModal/DeleteModal";
import WarningModal from "../../partials/warningModal/WarningModal";

const ListData = ({ hasCheckbox, titleData, bodyData }) => {
  const location = useLocation();
  const [activeModal, setActiveModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleActive = () => {
    setActiveModal((prevActiveModal) => !prevActiveModal);
  };
  const handleConfirm = () => {
    setIsClicked((previsClicked) => !previsClicked);
    setActiveModal(false);
  };

  return (
    <>
      <Table>
        {location.pathname === "/channelmanage" ? (
          ""
        ) : (
          <Topic>
            <GroupOprationBtn>
              اعمال عملیات گروهی
              <img src="./assets/Button/arrow-down.svg" alt="arrowDown" />
            </GroupOprationBtn>
            <NavigationBar />
          </Topic>
        )}
        <Header>
          <Title>
            <Div>
              <Checkbox
                hasCheckbox={hasCheckbox}
                src={"/assets/ListData/checked.svg"}
              />
            </Div>
            <Row>
              {titleData.map((title, index) => (
                <Flex location={location} key={index}>
                  {title.parametrs.map((Link, items) => (
                    <>
                      {location.pathname === "/channelmanage" ? (
                        <List key={items}>
                          {Link.name}
                          {Link.condition}
                        </List>
                      ) : (
                        <List key={items}>{Link.name}</List>
                      )}
                    </>
                  ))}
                </Flex>
              ))}
            </Row>
          </Title>
        </Header>
        <ListBody>
          <Orders>
            {bodyData.map((item, index) => {
              return (
                <OrderList key={index}>
                  {item.parametrs.map((Link, items) => {
                    return (
                      <Menu
                        style={
                          Link.checked === "true"
                            ? {
                                background:
                                  "linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%)",
                              }
                            : { background: "rgba(255, 255, 255, 1)" }
                        }
                      >
                        <Div>
                          <Checkbox
                            hasCheckbox={hasCheckbox}
                            src={
                              Link.checked === "true"
                                ? "/assets/ListData/checked.svg"
                                : "/assets/ListData/unchecked.svg"
                            }
                            alt="checked"
                          />
                        </Div>
                        <Row key={items}>
                          <Specifications location={location}>
                            <li>{Link.name}</li>
                            <li>{Link.nationalcode}</li>
                            <li>{Link.username}</li>
                            <li>{Link.data}</li>
                            <li
                              style={
                                location.pathname === "/channelmanage"
                                  ? { fontSize: "9px" }
                                  : { fontSize: "11px" }
                              }
                            >
                              {Link.registery}
                            </li>
                            <Condition
                              style={
                                Link.checked === "true"
                                  ? { color: "rgba(45, 165, 45, 1)" }
                                  : { color: "rgba(213, 0, 0, 1)" }
                              }
                            >
                              {Link.condition}
                            </Condition>
                            {location.pathname === "/channelmanage" ? (
                              <Condition
                                style={
                                  Link.checked === "true"
                                    ? { color: "rgba(45, 165, 45, 1)" }
                                    : { color: "rgba(213, 0, 0, 1)" }
                                }
                              >
                                {Link.deleteCondition}
                              </Condition>
                            ) : null}
                          </Specifications>
                        </Row>
                        <Tools>
                          <img src={Link.handler} alt="handler" />
                          <img src={Link.editor} alt="editor" />
                          {location.pathname === "/channelmanage" ? (
                            ""
                          ) : (
                            <img
                              onClick={handleActive}
                              src={Link.trash}
                              alt="trash"
                            />
                          )}
                        </Tools>
                      </Menu>
                    );
                  })}
                </OrderList>
              );
            })}
          </Orders>
        </ListBody>
        {location.pathname === "/channelmanage" ? (
          ""
        ) : (
          <TopicWrapper>
            <NavigationBar />
          </TopicWrapper>
        )}
      </Table>
      {activeModal && (
        <DeleteModal
          setActiveModal={setActiveModal}
          handleConfirm={handleConfirm}
        />
      )}
      {isClicked && (
        <WarningModal isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </>
  );
};

export default ListData;
