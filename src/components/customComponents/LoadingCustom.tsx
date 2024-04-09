import React, { useContext } from "react";
import { Alert, Flex, Spin } from "antd";
import { StoreContext } from "../reduxAndStore/StoreContextCustom";

const LoadingCustom: React.FC = () => {
  const { loading } = useContext(StoreContext);
  if (loading) {
    return (
      <Flex gap="small" vertical className="loading-custom-wrap">
        <Flex gap="small">
          <Spin tip="Loading">
            <div className="content" />
          </Spin>
        </Flex>
      </Flex>
    );
  }
  return <></>;
};

export default LoadingCustom;
