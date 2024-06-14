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
import Routers from "./components/routers";
import { HelmetProvider } from "react-helmet-async";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "../src/components/routers/history";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      {/*
      // @ts-ignore */}
      <HistoryRouter history={history}>
        <Routers />
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default App;
