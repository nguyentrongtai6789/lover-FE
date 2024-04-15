import { Layout, Tooltip, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { listBookAmThucNauAn, listCategories } from "../../../fakeData";
import { IBookThuVien, ICategory } from "../../../global/interface";

const TrangChu = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const lissBook = listBookAmThucNauAn;
  return (
    <Layout style={{ padding: "" }}>
      <div className="menu-category">
        {listCategories.map((item: ICategory, index) => (
          <span>{item.name}</span>
        ))}
      </div>
      <Content
        style={{
          padding: 5,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          width: "100%",
        }}
      >
        <div className="div-content">
          {listBookAmThucNauAn.map((item: IBookThuVien, index) => (
            <div className="div-child">
              <img src={item.urlImage ? item.urlImage : ""} alt="No image" />
              <div className="name-book">{item.name}</div>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};
export default TrangChu;
