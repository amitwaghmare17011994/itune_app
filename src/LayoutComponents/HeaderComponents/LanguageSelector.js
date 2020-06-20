import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { LOCALES, LOCALES_LABELS } from "../../i189/locales";
import { connect } from "react-redux";

import store from "../../Store/store";
import { updateStoreData } from "../../Helpers/actions";

const onClick = ({ key }) => {
  store.dispatch(updateStoreData({ selectedLanguage: key }));
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key={LOCALES.ENGLISH}>English</Menu.Item>
    <Menu.Item key={LOCALES.FRENCH}>French</Menu.Item>
  </Menu>
);

export const LanguageSelector = ({ selectedLanguage = LOCALES.ENGLISH }) => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <span className="dropdown-link" onClick={(e) => e.preventDefault()}>
          {LOCALES_LABELS[selectedLanguage]} <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default connect((state) => ({
  selectedLanguage: state.songs.selectedLanguage,
}))(LanguageSelector);
