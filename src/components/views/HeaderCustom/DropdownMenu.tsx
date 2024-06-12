import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Modal, Space } from "antd";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { IconFacebook, IconGoogle } from "../../../global/linkImage";
import { ButtonCustom } from "../../customComponents/ButtonCustom";
import { InputCustom } from "../../customComponents/InputCustom";
import { StoreContext } from "../../reduxAndStore/StoreContextCustom";

import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  LOGIN_REQUEST,
  LOGOUT,
} from "../../reduxAndStore/redux/actions/actionTypes";
import { LOGGED_IN } from "../../reduxAndStore/redux/statusTypes";
import httpMethod from "../../services/httpMethod";
import { AxiosError, AxiosResponse } from "axios";
import NotificationCustom from "../../customComponents/NotificationCustom";

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

  const loginSelector = useSelector((state: any) => state.login.status);

  const loading = useSelector((state: any) => state.login.loading);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  const isLogin = loginSelector === LOGGED_IN ? true : false;

  useEffect(() => {
    if (isLogin) setOpenLogin(false);
  }, [isLogin]);

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
            isLogin ? handleLogout() : setOpenLogin(true);
          }}
        >
          {isLogin ? "Đăng xuất" : "Đăng nhập"}
        </a>
      ),
    },
  ];

  const dispatch = useDispatch();

  const handleLogin = (values: ILoginValues) => {
    dispatch({ type: LOGIN_REQUEST, values });
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  const initialValues: ILoginValues = {
    username: "",
    password: "",
  };

  const handleDemo = () => {
    setLoading(true);
    httpMethod
      .get("http://localhost:8080/api/find-all-account")
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          return NotificationCustom("Lấy thông tin thành công", "success");
        }
      })
      .catch((err: AxiosError) => {})
      .finally(() => {
        setLoading(false);
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
                    <ButtonCustom
                      title="Demo"
                      style={{ maxWidth: "100px" }}
                      htmlType="button"
                      onClick={() => {
                        handleDemo();
                      }}
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
