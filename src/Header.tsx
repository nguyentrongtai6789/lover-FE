import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderCustom: React.FC = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default HeaderCustom;
