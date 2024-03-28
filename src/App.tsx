import React, { useState } from "react";
import {
  DesktopOutlined,
  DownOutlined,
  FileOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import "./Header.css";
import Search from "antd/es/input/Search";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const itemsSideBar: MenuItem[] = [
    // getItem("Option 1", "1", <PieChartOutlined />),
    // getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

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
      key: "2",
      danger: true,
      label: "Đăng xuất",
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh", padding: "0" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsSideBar}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header ">
            <div // icon header
              className="icon-header"
            >
              <img
                src="https://librireading.com/wp-content/uploads/2021/06/z2555569091868_782e5f0f9cbd0eba43cc09596a122e36.jpg"
                alt=""
              />
            </div>
            <div className="about-us-header col-2">
              <Button type="text">Về chúng tôi</Button>
            </div>
            <div //div search form
              className="search-header-div"
            >
              <Search
                className="search-header"
                placeholder="Tìm kiếm"
                onSearch={() => {}}
              />
            </div>
            <div className="menu-header">
              <Button type="text">Thư viện ảnh</Button>
              <Button type="text">Đọc sách miễn phí</Button>
              <Button type="text">Mua sách</Button>
            </div>
            <div className="avatar-header">
              <div style={{ display: "flex" }}>
                <ShoppingCartOutlined style={{ fontSize: 25 }} />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <Avatar icon={<UserOutlined />} />
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </Header>
        {/* <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content> */}
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
