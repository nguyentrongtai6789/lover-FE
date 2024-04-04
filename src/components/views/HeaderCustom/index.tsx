import {
  DownOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Dropdown,
  Flex,
  Input,
  Layout,
  Menu,
  MenuProps,
  Space,
  Tooltip,
} from "antd";
import React, { useState } from "react";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Cài đặt tài khoản
      </a>
    ),
  },
  {
    key: "4",
    danger: true,
    label: `Đăng xuất `,
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">TRANG CHỦ</Menu.Item>
    <Menu.Item key="2">VỀ CHÚNG TÔI</Menu.Item>
    <Menu.Item key="3">MUA SÁCH</Menu.Item>
    <Menu.Item key="3">ĐỌC MIỄN PHÍ</Menu.Item>
  </Menu>
);

const HeaderCustom: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<number>(1);

  return (
    <Header className="header">
      <div className="logo-header">
        <img
          src="https://oquada.com/upload/category/PDF-eBook-OQUADA.jpg"
          alt=""
        />
      </div>
      <Flex gap="small" wrap="wrap">
        <div className="menu-header">
          <div
            className="div-header"
            style={menuSelected === 1 ? { backgroundColor: "#111" } : {}}
            onClick={() => setMenuSelected(1)}
          >
            TRANG CHỦ
          </div>
          <div
            className="div-header"
            style={menuSelected === 2 ? { backgroundColor: "#111" } : {}}
            onClick={() => setMenuSelected(2)}
          >
            VỀ CHÚNG TÔI
          </div>
          <div
            className="div-header"
            style={menuSelected === 3 ? { backgroundColor: "#111" } : {}}
            onClick={() => setMenuSelected(3)}
          >
            MUA SÁCH
          </div>
          <div
            className="div-header"
            style={menuSelected === 4 ? { backgroundColor: "#111" } : {}}
            onClick={() => setMenuSelected(4)}
          >
            ĐỌC MIỄN PHÍ
          </div>
        </div>
        <Dropdown overlay={menu} className="button-menu">
          <Space>
            <Avatar shape="square" size="large" icon={<MenuUnfoldOutlined />} />
          </Space>
        </Dropdown>
      </Flex>
      <div className="search-header-wrapper">
        <Input
          className="search-header"
          placeholder="Tìm kiếm"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
      </div>
      <div className="card-header">
        <Badge count={5} style={{ marginTop: "30px" }}>
          <ShoppingCartOutlined
            size={50}
            style={{ fontSize: 25, marginTop: "30px" }}
          />
        </Badge>
      </div>
      <div className="avatar-header">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderCustom;
