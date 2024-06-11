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

import * as Yup from "yup";

const validateLogin = Yup.object().shape({
  username: Yup.string().required("Bạn chưa điền Tên đăng nhập").nullable(),
  password: Yup.string().required("Bạn chưa điền Mật khẩu").nullable(),
});

interface ILoginValues {
  username: string;
  password: string;
}

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

  const handleLogin = async (value: ILoginValues) => {
    setLoading(true);
    axios
      .post(`${LOGIN}`, value)
      .then((res: AxiosResponse) => {
        if (res?.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          return NotificationCustom("Đăng nhập thành công", "success");
        }
      })
      .catch((error: AxiosError) => {
        if (error?.response?.status === 401) {
          return NotificationCustom(
            "Tài khoản hoặc mật khẩu không đúng",
            "error"
          );
        }
        if (error?.code === AxiosError.ERR_NETWORK) {
          return NotificationCustom("Lỗi kết nối mạng", "error");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  const initialValues: ILoginValues = {
    username: "",
    password: "",
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
          className="modal-dang-nhap"
          width={1400}
          open={openLogin}
          onCancel={() => {
            setOpenLogin(false);
          }}
          footer={false}
          centered
          maskClosable={false}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Đăng nhập
          </div>
          <div>
            <ButtonCustom
              title="Đăng nhập với Facebook"
              urlImage={IconFacebook}
            />
          </div>
          <div>
            <ButtonCustom title="Đăng nhập với Google" urlImage={IconGoogle} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Hoặc nhập thông tin tài khoản:
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values: ILoginValues) => {
              handleLogin(values);
            }}
            validationSchema={validateLogin}
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
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
