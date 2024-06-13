import { Layout } from "antd";
import SideBarCustom from "../SideBarTrangChu";
import "./styles.scss";
import { listBaiViet } from "../../../fakeData";
import { IBaiViet } from "../../../global/interface";
import { useNavigate } from "react-router-dom";
const TrangChu = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ padding: "" }}>
      <SideBarCustom />
      <div className="trang-chu">
        {listBaiViet.map((item: IBaiViet) => (
          <>
            <div
              className="tom-tat-bai-viet"
              onClick={() => {
                navigate(`${item.id}`);
              }}
            >
              <img src={item.anhTieuDe} alt="" />
              <div>
                <div className="tieu-de">{item.tieuDe}</div>
                <div className="noi-dung-chinh">{item.noiDung}</div>
                <div className="tac-gia-ngay-dang">
                  <img src={item.tacGia.avatar} alt="" />
                  <span>Tác giả: {item.tacGia.name}</span>
                  <span>Ngày đăng: {item.createdAt}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};
export default TrangChu;
