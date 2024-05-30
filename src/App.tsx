import { Layout } from "antd";
import React from "react";
import "../src/components/styles/button.scss";
import "../src/components/styles/header.scss";
import "../src/components/styles/input.scss";
import "../src/components/styles/loading.scss";
import "../src/components/styles/modal.scss";
import "../src/components/styles/sider.scss";
import "../src/components/styles/trangChu.scss";
import "../src/components/styles/dropdown.scss";

import LoadingCustom from "./components/customComponents/LoadingCustom";
import { StoreProvider } from "./components/reduxAndStore/StoreContextCustom";
import HeaderCustom from "./components/views/HeaderCustom";
import SideBarCustom from "./components/views/SideBarCustom";
import TrangChu from "./components/views/TrangChu";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        maxHeight: "100vh",
        overflowY: "unset",
      }}
    >
      <StoreProvider>
        <Layout style={{ padding: 0, marginTop: 0, backgroundColor: "red" }}>
          <div className="header-wrapper">
            <HeaderCustom />
          </div>
          <Layout>
            <SideBarCustom />
            <TrangChu />
          </Layout>
        </Layout>
        <LoadingCustom />
      </StoreProvider>
    </div>
  );
};

export default App;
