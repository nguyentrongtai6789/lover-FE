import { Layout } from "antd";
import { listBaiViet } from "../../../../fakeData";
import { IBaiViet } from "../../../../global/interface";
import "./styles.scss";
const TrangChu = () => {
  return (
    <Layout style={{ padding: "" }}>
      <div className="trang-chu">
        {listBaiViet.map((item: IBaiViet) => (
          <>
            <div className="tom-tat-bai-viet" onClick={() => {}}>
              <img src={item.anhTieuDe} alt="" />
              <div>
                <div className="tieu-de">{item.tieuDe}</div>
                <div className="noi-dung-chinh">{item.noiDung}</div>
                <div className="tac-gia-ngay-dang">
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
