import React from "react";
import "../src/components/styles/button.scss";
import "../src/components/styles/dropdown.scss";
import "../src/components/styles/header.scss";
import "../src/components/styles/input.scss";
import "../src/components/styles/loading.scss";
import "../src/components/styles/modal.scss";
import "../src/components/styles/notification.scss";
import "../src/components/styles/sider.scss";
import "../src/components/styles/trangChu.scss";

import { useDispatch } from "react-redux";
import {
  LOGIN_REQUEST,
  LOGOUT,
} from "./components/reduxAndStore/redux/actions/actionTypes";
import logo from "./logo.svg";
import { StoreProvider } from "./components/reduxAndStore/StoreContextCustom";
import { Layout } from "antd";
import HeaderCustom from "./components/views/HeaderCustom";
import TrangChu from "./components/views/TrangChu";
import SideBarCustom from "./components/views/SideBarCustom";
import LoadingCustom from "./components/customComponents/LoadingCustom";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: LOGIN_REQUEST, user: "user11", password: "123456aA" });
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //   <div>
    //     <button
    //       onClick={() => {
    //         handleLogin();
    //       }}
    //     >
    //       Login
    //     </button>
    //     <button
    //       onClick={() => {
    //         handleLogout();
    //       }}
    //     >
    //       Logout
    //     </button>
    //   </div>
    //   <p>status: {}</p>
    //   <p>token: {}</p>
    // </div>
  );
};

export default App;
