import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import LoadingCustom from "../../customComponents/LoadingCustom";
import { StoreProvider } from "../../reduxAndStore/StoreContextCustom";
import HeaderCustom from "../../views/HeaderCustom";
import SideBarCustom from "../../views/SideBar";

const DefaultLayout: React.FC = () => {
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
            <Layout style={{ padding: "" }}>
              <SideBarCustom />
              <Outlet />
            </Layout>
          </Layout>
        </Layout>
        <LoadingCustom />
      </StoreProvider>
    </div>
  );
};

export default DefaultLayout;
