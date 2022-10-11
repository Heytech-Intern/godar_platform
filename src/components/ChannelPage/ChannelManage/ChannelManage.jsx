import React, { useState, useRef, useEffect } from "react";

import ChannelFilterInput from "../ChannelFilterInput/ChannelFilterInput";
import SelectBox from "../SelectBox/SelectBox";
import StatusBar from "../StatusBar/StatusBar";
import FilteredTags from "../FilteredTags/FilteredTags";
import RemoveFilterButton from "../RemoveFilterButton/RemoveFilterButton";
import NavigationBar from "../../NavigationBar/NavigationBar";
import TableActionButton from "../TableActionButton/TableActionButton";
import ListData from "../../ListData/ListData";

import {
  Container,
  Filter,
  FilterHeader,
  FilterBody,
  Content,
  Tag,
  Flex,
} from "./style/ChannelManage.style";

import {
  formDataInit,
  tagsInit,
  conditionInit,
  channelConditionInit,
} from "../../../partials/channel-initial-state";
import { titleData, bodyData } from "../../../partials/channelData";

const ChannelManage = () => {
  const showFilterRef = useRef();
  const inputRef = useRef();

  const [formData, setFormData] = useState(formDataInit);
  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState(tagsInit);
  const [condition, setCondition] = useState(conditionInit);
  const [channelCondition, setChannelCondition] =
    useState(channelConditionInit);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        formData.channel === inputRef.current.value &&
        formData.channel !== ""
      ) {
        setTags([
          ...tags,
          {
            title: inputRef.current.value,
          },
        ]);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputRef, formData.channel]);

  const switchFilterHandler = () => {
    showFilterRef.current.classList.toggle("show");
    if (showFilterRef.current.classList.contains("show")) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const resetButtonHandler = () => {
    setFormData({
      channel: "",
      fromDate: "",
      toDate: "",
    });
    setTags([]);
    changeStatusActiveHandler(1, true);
    changeStatusActiveHandler(1, false);
  };

  const removeTagHandler = (id) => {
    const cloneTags = [...tags];
    const newTags = cloneTags.filter((item, index) => index !== id);

    setTags(newTags);
  };

  const removeAllTagsHandler = () => {
    setTags([]);
  };

  const changeFormDataHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  return (
    <Container>
      <Filter>
        <FilterHeader filterr={isActive}>
          <h2>مدیریت کانال ها</h2>

          <div className="filter--header__nav">
            <span>
              <img
                src="./assets/ChannelManage/plus.svg"
                alt="add-image-icon"
                onClick={resetButtonHandler}
              />
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

        <FilterBody ref={showFilterRef}>
          <h3 className="filter-body-title">جستجو و فیلتر</h3>
          <Flex>
            <ChannelFilterInput>
              <input
                value={formData.channel}
                name="channel"
                ref={inputRef}
                onChange={(e) => changeFormDataHandler(e)}
                type="text"
                placeholder="کانال استعلامات"
              />
            </ChannelFilterInput>
            <ChannelFilterInput>
              <input
                value={formData.fromDate}
                name="fromDate"
                onChange={(e) => changeFormDataHandler(e)}
                type="text"
                placeholder="۱۳۹۹/۰۳/۰۷"
              />
              <img
                src="./assets/ChannelManage/calendar-Regular.svg"
                alt="calendar-icon"
              />
            </ChannelFilterInput>
            <ChannelFilterInput>
              <input
                value={formData.toDate}
                name="toDate"
                onChange={(e) => changeFormDataHandler(e)}
                type="text"
                placeholder="۱۳۹۹/۰۴/۰۷"
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
              {tags !== undefined
                ? tags.map((item, index) => {
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
                  })
                : ""}
            </FilteredTags>
            <RemoveFilterButton
              toggle={tags.length !== 0}
              click={removeAllTagsHandler}
            >
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
