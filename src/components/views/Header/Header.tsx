import {
  DownOutlined,
  ShoppingCartOutlined,
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
    <Header className="header">
      <div className="logo-header">
        <img
          src="https://librireading.com/wp-content/uploads/2021/07/welcome_logo-e1625356970296.jpg"
          alt=""
        />
      </div>

      <div className="menu-header">
        <Flex
          gap="small"
          wrap="wrap"
          style={{ justifyContent: "space-between" }}
        >
          <div className="div-header">TRANG CHỦ</div>
          <div className="div-header">VỀ CHÚNG TÔI</div>
          <div className="div-header">MUA SÁCH</div>
          <div className="div-header">CÂU CHUYỆN</div>
        </Flex>
      </div>
      <div className="search-header">
        <Search
          placeholder="input search text"
          onSearch={() => {}}
          enterButton
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
