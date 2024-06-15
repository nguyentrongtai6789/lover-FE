import { Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IBaiViet } from "../../../global/interface";
import "./styles.scss";
import { useEffect, useState } from "react";
import {
  listBaiVietKienThucMeBau,
  listBaiVietNuoiDayCon,
} from "../../../fakeData";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
const TrangChu = () => {
  const navigate = useNavigate();

  const [listBaiViet, setListBaiViet] = useState<IBaiViet[]>([]);

  const location = useLocation();

  const currentUrl = location.pathname.split("/");

  useEffect(() => {
    if (!location || !currentUrl) return;
    if (
      currentUrl.includes("trang-chu") &&
      currentUrl.includes("nuoi-day-con")
    ) {
      setListBaiViet(listBaiVietNuoiDayCon);
    }
    if (
      currentUrl.includes("trang-chu") &&
      currentUrl.includes("kien-thuc-me-bau")
    ) {
      setListBaiViet(listBaiVietKienThucMeBau);
    }
  }, [location]);

  return (
    <Layout>
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
                  <span>Tác giả: </span> <img src={item.tacGia.avatar} alt="" />
                  <span>{item.tacGia.name}</span>
                  <span>Ngày đăng: {item.createdAt}</span>
                  <span>|</span>
                  <span style={{ color: "blue" }}>
                    52 <LikeOutlined style={{ color: "blue" }} />
                  </span>
                  <span style={{ color: "blue" }}>
                    16 <CommentOutlined style={{ color: "blue" }} />
                  </span>
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
