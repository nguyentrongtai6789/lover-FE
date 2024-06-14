import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { listBookAmThucNauAn } from "../../../fakeData";
import { IBookThuVien } from "../../../global/interface";

const ThuVienSach = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const lissBook = listBookAmThucNauAn;
  return (
    <Layout style={{ padding: "" }}>
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
export default ThuVienSach;
