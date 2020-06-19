import React from "react";
import { Layout } from "antd";
import SearchBar from "./LayoutComponents/HeaderComponents/SearchBar";
import Body from "./LayoutComponents/Body";
import ItunesIcon from "./Assests/Images/itunes.png";
const { Header, Content } = Layout;

export const HomePage = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div>
          <div className="logo">
            <img src={ItunesIcon} style={{ width: 50 }} />
          </div>
            <SearchBar />
          </div>
      </Header>

      <Content className="content">
        <Body />
      </Content>
    </Layout>
  );
};

export default HomePage;
