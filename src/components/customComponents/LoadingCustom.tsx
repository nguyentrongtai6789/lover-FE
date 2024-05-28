import React, { useContext } from "react";
import { Alert, Flex, Spin } from "antd";
import { StoreContext } from "../reduxAndStore/StoreContextCustom";

const LoadingCustom: React.FC = () => {
  const { loading } = useContext(StoreContext);
  if (loading) {
    return (
      <Flex gap="large" vertical className="loading-custom-wrap">
        <Flex gap="large">
          <Spin tip="Đang tải..." size={"large"}>
            <div className="content" />
          </Spin>
        </Flex>
      </Flex>
    );
  }
  return <></>;
};

export default LoadingCustom;
