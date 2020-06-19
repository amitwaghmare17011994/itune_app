import React from "react";
import { Layout } from "antd";
import SearchBar from "./LayoutComponents/HeaderComponents/SearchBar";
import Body from "./LayoutComponents/Body";

const { Header, Content } = Layout;


export const HomePage = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <SearchBar />
      </Header>
      <Content className="content">
        <Body />
      </Content>
    </Layout>
  );
};

export default HomePage;
