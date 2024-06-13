import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Flex, Input, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import DropdowMenu from "./DropdownMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { listMenu } from "../../../fakeData";
import { IMenu } from "../../../global/interface";

const { Header } = Layout;

const HeaderCustom: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<number>(0);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (!location) return;
    const currentUrl = location.pathname;
    for (let i = 0; i <= listMenu.length; i++) {
      if (currentUrl.includes(listMenu[i].pathName)) {
        setMenuSelected(i + 1);
        break;
      }
    }
  }, [location]);

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
          {listMenu.map((item: IMenu, index) => (
            <div
              className="div-header"
              style={
                menuSelected === index + 1 ? { backgroundColor: "#111" } : {}
              }
              onClick={() => {
                setMenuSelected(index + 1);
                navigate(`${item.pathName}/${item.listCategories[0].pathName}`);
              }}
            >
              {item.name}
            </div>
          ))}
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
