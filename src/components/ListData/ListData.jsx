import React from "react";
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
  Name,
  Specifications,
  Tools,
} from "./style/ListData.style";
import { GlobalStyles } from "../../partials/Global";

const ListData = ({ hasCheckbox, titleData, bodyData }) => {
  return (
    <Table>
      <GlobalStyles />
      <Header>
        <Title>
          <div>
            <Checkbox
              hasCheckbox={hasCheckbox}
              src={"/assets/ListData/checked.svg"}
            />
          </div>
          <Row>
            {titleData.map((title, index) => (
              <Flex key={index}>
                {title.parametrs.map((Link, items) => {
                  return <List key={items}>{Link.name}</List>;
                })}
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
                      <div>
                        <Checkbox
                          hasCheckbox={hasCheckbox}
                          src={
                            Link.checked === "true"
                              ? "/assets/ListData/checked.svg"
                              : "/assets/ListData/unchecked.svg"
                          }
                          alt="checked"
                        />
                      </div>
                      <Name key={items}>
                        <li>{Link.name}</li>
                      </Name>
                      <Specifications>
                        <li>{Link.nationalcode}</li>
                        <li>{Link.username}</li>
                        <li>{Link.data}</li>
                        <li>{Link.registery}</li>
                        <li
                          style={
                            Link.checked === "true"
                              ? { color: "rgba(45, 165, 45, 1)" }
                              : { color: "rgba(213, 0, 0, 1)" }
                          }
                        >
                          {Link.condition}
                        </li>
                      </Specifications>
                      <Tools>
                        <img src={Link.handler} alt="handler" />
                        <img src={Link.editor} alt="editor" />
                        <img src={Link.trash} alt="trash" />
                      </Tools>
                    </Menu>
                  );
                })}
              </OrderList>
            );
          })}
        </Orders>
      </ListBody>
    </Table>
  );
};

export default ListData;
