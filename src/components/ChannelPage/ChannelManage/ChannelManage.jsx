import React, { useState, useRef } from "react";

import ChannelFilterInput from "../ChannelFilterInput/ChannelFilterInput";
import SelectBox from "../SelectBox/SelectBox";
import StatusBar from "../StatusBar/StatusBar";
import FilteredTags from "../FilteredTags/FilteredTags";
import RemoveFilterButton from "../RemoveFilterButton/RemoveFilterButton";
import NavigationBar from "../../NavigationBar/NavigationBar";
import TableActionButton from "../TableActionButton/TableActionButton";
import ListData from "../../ListData/ListData";
import { titleData, bodyData } from "../../../partials/channelData";

import {
  Container,
  Filter,
  FilterHeader,
  FilterBody,
  Content,
  Tag,
  Flex,
} from "./style/ChannelManage.style";

const ChannelManage = () => {
  const [isActive, setIsActive] = useState(false);

  const [channelInput, setChannelInput] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [tags, setTags] = useState([
    {
      title: "عنوان کانال: کانال استعلامات",
    },
    {
      title: "تاریخ ایجاد از: 1399/03/07",
    },
    {
      title: "تاریخ ایجاد تا: 1399/04/07",
    },
    {
      title: "برچسب کانال: SYSTEM",
    },
    {
      title: "وضعیت حذف کانال: حدف نشده",
    },
    {
      title: "وضعیت کانال: فعال",
    },
  ]);

  const [condition, setCondition] = useState([
    {
      title: "همه وضعیت ها",
      active: false,
    },
    {
      title: "فعال",
      active: true,
    },
    {
      title: "غیر فعال",
      active: false,
    },
  ]);

  const [channelCondition, setChannelCondition] = useState([
    {
      title: "همه وضعیت ها",
      active: false,
    },
    {
      title: "حذف نشده",
      active: true,
    },
    {
      title: "حذف شده",
      active: false,
    },
  ]);

  const ref = useRef();

  const switchFilterHandler = () => {
    ref.current.classList.toggle("show");
    if (ref.current.classList.contains("show")) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const changeStatusActiveHandler = (id, mode) => {
    if (mode) {
      let newCondition = [...condition];
      newCondition.forEach((item) => (item.active = false));
      newCondition.forEach((item, index) => {
        if (index === id) item.active = true;
      });
      setCondition(newCondition);
    } else {
      let newCondition = [...channelCondition];
      newCondition.forEach((item) => (item.active = false));
      newCondition.forEach((item, index) => {
        if (index === id) item.active = true;
      });
      setChannelCondition(newCondition);
    }
  };

  const removeTagHandler = (id) => {
    const cloneTags = [...tags];
    const newTags = cloneTags.filter((item, index) => index !== id);

    setTags(newTags);
  };

  const removeAllTagsHandler = () => {
    setTags([]);
  };

  return (
    <Container>
      <Filter>
        <FilterHeader filterr={isActive}>
          <h2>مدیریت کانال ها</h2>

          <div className="filter--header__nav">
            <span>
              <img src="./assets/ChannelManage/plus.svg" alt="add-image-icon" />
            </span>
            <span>
              <img
                onClick={switchFilterHandler}
                src="./assets/ChannelManage/filter.svg"
                alt="filter-image-icon"
              />
            </span>
            <span>
              <img
                src="./assets/ChannelManage/refrsh.svg"
                alt="refresh-image-icon"
              />
            </span>
          </div>
        </FilterHeader>
        <FilterBody ref={ref}>
          <h3 className="filter-body-title">جستجو و فیلتر</h3>
          <Flex>
            <ChannelFilterInput>
              <input
                value={channelInput}
                onChange={(e) => setChannelInput(e.target.value)}
                type="text"
                placeholder="کانال استعلامات"
              />
            </ChannelFilterInput>
            <ChannelFilterInput>
              <input
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                type="text"
                placeholder="1399/03/07"
              />
              <img
                src="./assets/ChannelManage/calendar-Regular.svg"
                alt="calendar-icon"
              />
            </ChannelFilterInput>
            <ChannelFilterInput>
              <input
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                type="text"
                placeholder="1399/04/07"
              />
              <img
                src="./assets/ChannelManage/calendar-Regular.svg"
                alt="calendar-icon"
              />
            </ChannelFilterInput>
          </Flex>
          <Flex style={{ justifyContent: "space-between" }}>
            <SelectBox />
            <StatusBar>
              {condition.map((item, index) => {
                return (
                  <p
                    onClick={(e) => changeStatusActiveHandler(index, true)}
                    key={index}
                    className={item.active ? "active" : ""}
                  >
                    {item.title}
                  </p>
                );
              })}
            </StatusBar>
          </Flex>
          <Flex>
            <p className="status">وضعیت کانال ها :</p>
            <StatusBar>
              {channelCondition.map((item, index) => {
                return (
                  <p
                    onClick={(e) => changeStatusActiveHandler(index, false)}
                    key={index}
                    className={item.active ? "active" : ""}
                  >
                    {item.title}
                  </p>
                );
              })}
            </StatusBar>
          </Flex>
          <Flex>
            <p className="filter-tag">فیلترهای اعمال شده:</p>
            <FilteredTags>
              {tags.map((item, index) => {
                return (
                  <Tag key={index}>
                    <pre>{item.title}</pre>
                    <img
                      onClick={() => removeTagHandler(index)}
                      src="./assets/ChannelManage/remove.svg"
                      alt="tag-remove-icon"
                    />
                  </Tag>
                );
              })}
            </FilteredTags>
            <RemoveFilterButton click={removeAllTagsHandler}>
              <p>حذف همه فیلترها</p>
              <img
                src="./assets/ChannelManage/remove.svg"
                alt="button-remove-icon"
              />
            </RemoveFilterButton>
          </Flex>
        </FilterBody>
      </Filter>

      <Content>
        <Flex space>
          <TableActionButton active={isActive}>
            <p>اعمال عملیات گروهی</p>
            <img
              src={
                isActive
                  ? "./assets/ChannelManage/chevron-down-Regular.svg"
                  : "./assets/ChannelManage/down-Regular.svg"
              }
              alt="button-expand-icon"
            />
          </TableActionButton>
          <NavigationBar />
        </Flex>
        <Flex table>
          <ListData
            hasCheckbox={true}
            titleData={titleData}
            bodyData={bodyData}
          />
        </Flex>
        <Flex className="bottom-nav">
          <NavigationBar />
        </Flex>
      </Content>
    </Container>
  );
};

export default ChannelManage;
