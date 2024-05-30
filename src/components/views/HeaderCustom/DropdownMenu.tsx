import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Modal, Space, notification } from "antd";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useContext, useState } from "react";
import { IconFacebook, IconGoogle } from "../../../global/linkImage";
import { ButtonCustom } from "../../customComponents/ButtonCustom";
import { InputCustom } from "../../customComponents/InputCustom";
import { StoreContext } from "../../reduxAndStore/StoreContextCustom";
import httpMethod from "../../services/httpMethod";

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
    try {
      const res = await httpMethod.post(
        `http://localhost:8080/api/login`,
        value
      );

      if (res?.status === 200 && res.data.data === 200) {
        console.log(res);
        localStorage.setItem("user-info", JSON.stringify(res.data));
        const openNotification = () => {
          notification.open({
            message: "",
            description: "Đăng nhập thành công!",
          });
        };
        setOpenLogin(false);
        return openNotification();
      } else {
        const openNotification = () => {
          notification.open({
            message: "",
            description: "Tài khoản hoặc mật khẩu không đúng!",
          });
        };
        return openNotification();
      }
    } catch {
    } finally {
      setLoading(false);
    }
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
