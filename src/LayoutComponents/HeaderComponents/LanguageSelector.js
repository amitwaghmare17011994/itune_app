import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, message } from "antd";
import { LOCALES } from "../../i189/locales";
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

export const LanguageSelector = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <a className="dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default connect((state) => state.songs.selectedLanguage)(
  LanguageSelector
);
