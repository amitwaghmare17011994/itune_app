import React from "react";
import "./styles.css";
import Body from "./LayoutComponents/Body";
import { Layout } from "antd";
import SearchBar from "./LayoutComponents/HeaderComponents/SearchBar";
const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <SearchBar />
      </Header>
      <Content
        style={{
          minHeight: "100vh",
          padding: "50px;",
          backgroundColor: "#394e61",
          marginTop: 20,
        }}
      >
        <Body />
      </Content>
    </Layout>
  );
}
