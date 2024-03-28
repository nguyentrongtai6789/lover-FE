import {
  DownOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  MenuProps,
  Space,
} from "antd";
import React from "react";

const { Header } = Layout;
const { Search } = Input;

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

const HeaderCustom: React.FC = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: "0",
      }}
    >
      <div
        className="logo-header"
        style={{
          height: "100%",
          width: "8%",
        }}
      >
        <img
          src="https://librireading.com/wp-content/uploads/2021/07/welcome_logo-e1625356970296.jpg"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="menu-header" style={{ marginLeft: "1%", width: "50%" }}>
        <Flex gap="small" wrap="wrap">
          <Button type="link">Trang chủ</Button>
          <Button type="link">Đọc sách miễn phí</Button>
          <Button type="link">Mua sách</Button>
          <Button type="link">Câu chuyện</Button>
        </Flex>
      </div>
      <div
        className="search-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "20%",
          marginLeft: "1%",
        }}
      >
        <Search
          placeholder="input search text"
          onSearch={() => {}}
          enterButton
        />
      </div>
      <div
        className="card-header"
        style={{
          position: "absolute",
          right: "6%",
        }}
      >
        <Badge count={5}>
          <ShoppingCartOutlined size={50} style={{ fontSize: 25 }} />
        </Badge>
      </div>
      <div
        className="avatar-header"
        style={{
          position: "absolute",
          right: "1%",
        }}
      >
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
