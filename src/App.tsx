import { Layout, theme } from "antd";
import React from "react";
import "../src/components/styles/button.scss";
import "../src/components/styles/header.scss";
import "../src/components/styles/sider.scss";
import "../src/components/styles/trangChu.scss";
import HeaderCustom from "./components/views/HeaderCustom";
import SideBarCustom from "./components/views/SideBarCustom";
import TrangChu from "./components/views/TrangChu";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ padding: 0, marginTop: 0, backgroundColor: "red" }}>
      <div className="header-wrapper">
        <HeaderCustom />
      </div>
      <Layout>
        <SideBarCustom />
        <TrangChu />
      </Layout>
    </Layout>
  );
};

export default App;
