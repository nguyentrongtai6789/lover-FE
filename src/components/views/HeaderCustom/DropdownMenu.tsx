import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Modal, Space } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useContext, useState } from "react";
import { IconFacebook, IconGoogle } from "../../../global/linkImage";
import { ButtonCustom } from "../../customComponents/ButtonCustom";
import { InputCustom } from "../../customComponents/InputCustom";
import NotificationCustom from "../../customComponents/NotificationCustom";
import { StoreContext } from "../../reduxAndStore/StoreContextCustom";
import { LOGIN } from "../../services/api";

const DropdowMenu: React.FC = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const { setLoading } = useContext(StoreContext);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a>Cài đặt tài khoản</a>,
    },
    {
      key: "2",
      label: (
        <a
          onClick={() => {
            setOpenLogin(true);
          }}
        >
          Đăng nhập
        </a>
      ),
      // icon: <UserOutlined />,
    },
  ];

  const handleLogin = async (value: any) => {
    setLoading(true);
    axios
      .post(`${LOGIN}`, value)
      .then((res: AxiosResponse) => {
        if (res.data.code === 200) {
          return NotificationCustom("Đăng nhập thành công", "success");
        }
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          return NotificationCustom(
            "Tài khoản hoặc mật khẩu không đúng",
            "error"
          );
        }
        if (error.code === "ERR_NETWORK") {
          return NotificationCustom("Lỗi kết nối mạng", "error");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
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
              handleLogin(values);
            }}
          >
            {(propsFormik: FormikProps<any>) => {
              const { values, setValues, setFieldValue } = propsFormik;
              return (
                <Form>
                  <Field
                    component={InputCustom}
                    name="username"
                    placeholder={"Tên đăng nhập"}
                  />

                  <Field
                    component={InputCustom}
                    name="password"
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
    </>
  );
};

export default DropdowMenu;
