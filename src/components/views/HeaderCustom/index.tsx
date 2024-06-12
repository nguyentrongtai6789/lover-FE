import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Flex, Input, Layout, Menu } from "antd";
import React, { useState } from "react";
import DropdowMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderCustom: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <Header className="header">
      <div className="logo-header">
        <img
          src="https://oquada.com/upload/category/PDF-eBook-OQUADA.jpg"
          alt=""
        />
      </div>
      <Flex gap="small" wrap="wrap">
        <div className="menu-header">
          <div
            className="div-header"
            style={menuSelected === 1 ? { backgroundColor: "#111" } : {}}
            onClick={() => {
              setMenuSelected(1);
              navigate("trang-chu/noi-dung-chinh");
            }}
          >
            TRANG CHỦ
          </div>
          <div
            className="div-header"
            style={menuSelected === 2 ? { backgroundColor: "#111" } : {}}
            onClick={() => {
              setMenuSelected(2);
              navigate("ve-chung-toi/noi-dung-chinh");
            }}
          >
            VỀ CHÚNG TÔI
          </div>
          <div
            className="div-header"
            style={menuSelected === 4 ? { backgroundColor: "#111" } : {}}
            onClick={() => {
              setMenuSelected(4);
              navigate("thu-vien-sach/noi-dung-chinh");
            }}
          >
            THƯ VIỆN SÁCH
          </div>
        </div>
      </Flex>
      <div className="search-header-wrapper">
        <Input
          className="search-header"
          placeholder="Tìm kiếm"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
      </div>
      <div className="card-header">
        <Badge count={5} style={{ marginTop: "30px" }}>
          <ShoppingCartOutlined
            size={50}
            style={{ fontSize: 25, marginTop: "30px" }}
          />
        </Badge>
      </div>
      <div className="avatar-header">
        <DropdowMenu />
      </div>
    </Header>
  );
};

export default HeaderCustom;
