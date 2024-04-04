import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { listCategories } from "../../../fakeData";
import { ICategory } from "../../../global/interface";

const TrangChu = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ padding: "24px 24px 24px" }}>
      <Content
        style={{
          padding: 5,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div className="menu-category">
          {listCategories.map((item: ICategory, index) => (
            <span>{item.name}</span>
          ))}
        </div>
        Content Content Content
      </Content>
    </Layout>
  );
};
export default TrangChu;
