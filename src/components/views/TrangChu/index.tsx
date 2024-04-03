import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

const TrangChu = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ padding: "24px 24px 24px" }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </Content>
    </Layout>
  );
};
export default TrangChu;
