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
  Modal,
  Space,
} from "antd";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useContext, useState } from "react";
import { IconFacebook, IconGoogle } from "../../../global/linkImage";
import { ButtonCustom } from "../../customComponents/ButtonCustom";
import { InputCustom } from "../../customComponents/InputCustom";
import { StoreContext } from "../../reduxAndStore/StoreContextCustom";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">TRANG CHỦ</Menu.Item>
    <Menu.Item key="2">VỀ CHÚNG TÔI</Menu.Item>
    <Menu.Item key="3">THƯ VIỆN SÁCH</Menu.Item>
  </Menu>
);

const HeaderCustom: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<number>(1);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const { loading, setLoading } = useContext(StoreContext);

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
            style={menuSelected === 4 ? { backgroundColor: "#111" } : {}}
            onClick={() => setMenuSelected(4)}
          >
            THƯ VIỆN SÁCH
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
      {openLogin && (
        <Modal
          width={1400}
          open={openLogin}
          onCancel={() => {
            setOpenLogin(false);
          }}
          footer={false}
          centered
          maskClosable={false}
        >
          <div>Đăng nhập</div>
          <div>
            <ButtonCustom
              title="Đăng nhập với Facebook"
              urlImage={IconFacebook}
            />
          </div>
          <div>
            <ButtonCustom title="Đăng nhập với Google" urlImage={IconGoogle} />
          </div>
          <div>Hoặc nhập thông tin tài khoản:</div>
          <Formik
            initialValues={{}}
            onSubmit={(values: any) => {
              console.log(values);
              console.log(loading);
              setOpenLogin(false);
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 5000);
            }}
            // innerRef={formikRef}
            // validationSchema={validateSubmit}
          >
            {(propsFormik: FormikProps<any>) => {
              const { values, setValues, setFieldValue } = propsFormik;
              return (
                <Form>
                  <Field
                    component={InputCustom}
                    name="tenDangNhap"
                    placeholder={"Tên đăng nhập"}
                  />

                  <Field
                    component={InputCustom}
                    name="matKhau"
                    placeholder={"Mật khẩu"}
                    type={"password"}
                  />
                  <div>
                    <ButtonCustom
                      title="Tiếp tục"
                      style={{ maxWidth: "100px" }}
                      htmlType="submit"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal>
      )}
    </Header>
  );
};

export default HeaderCustom;
