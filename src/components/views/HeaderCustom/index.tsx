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
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  Menu,
  MenuProps,
  Modal,
} from "antd";
import React, { useState } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { Col, Row, Space, Table } from "antd";

const { Header } = Layout;

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
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const menuAvatar = (
    <Menu>
      <Menu.Item key="1">Cài đặt tài khoản</Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          setOpenLogin(true);
        }}
      >
        Đăng nhập
      </Menu.Item>
    </Menu>
  );

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
        <Dropdown overlay={menuAvatar}>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
      <Modal
        width={1400}
        open={openLogin}
        onCancel={() => {
          setOpenLogin(false);
        }}
        footer={false}
        centered
        closeIcon={false}
      >
        <div>ĐĂNG NHẬP</div>
        <div>
          <Button
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            Đăng nhập với Facebook
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            Đăng nhập với Google
          </Button>
        </div>
        <div>Hoặc nhập thông tin tài khoản:</div>
        <div>
          <Formik
            initialValues={{}}
            onSubmit={(values: any) => {
              console.log(values);
            }}
            // innerRef={formikRef}
            // validationSchema={validateSubmit}
          >
            {(propsFormik: FormikProps<any>) => {
              return (
                <Form>
                  <Field
                    label={"Ngày cập nhật"}
                    component={Input}
                    name="ngayCapNhat"
                    placeholder={"Tài khoản"}
                  />
                  <Field
                    label={"Nhận xét hàng năm của cơ quan cấp trên"}
                    component={Input}
                    name="nhanXet"
                    className="TNKey"
                    placeholder={"Mật khẩu"}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </Header>
  );
};

export default HeaderCustom;
