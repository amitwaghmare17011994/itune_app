import React from "react";
import { Layout } from "antd";
import SearchBar from "./LayoutComponents/HeaderComponents/SearchBar";
import Body from "./LayoutComponents/Body";
import ItunesIcon from "./Assests/Images/itunes.png";
import LanguageSelector from "./LayoutComponents/HeaderComponents/LanguageSelector";

const { Header, Content } = Layout;

export const HomePage = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex" }}>
          <div className="logo">
            <img src={ItunesIcon} style={{ width: 50 }} alt="Logo" />
          </div>
          <div style={{ flex: 3 }}>
            <SearchBar />
          </div>
          <div style={{ flex: 1 }}>
            <LanguageSelector />
          </div>
        </div>
      </Header>

      <Content className="content">
        <Body />
      </Content>
    </Layout>
  );
};

export default HomePage;
