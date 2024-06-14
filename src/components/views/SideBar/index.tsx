import type { MenuProps } from "antd";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  listCategoriesThuVienSach,
  listCategoriesTrangChu,
} from "../../../fakeData";
import { ICategory } from "../../../global/interface";

const SideBarCustom = () => {
  const [menuSelected, setMenuSelected] = useState<number>(0);

  const navigate = useNavigate();

  const [listCategories, setListCategories] = useState<ICategory[]>([]);

  const location = useLocation();

  const currentUrl = location.pathname.split("/");

  useEffect(() => {
    if (!location) return;
    if (currentUrl.includes("trang-chu")) {
      setListCategories(listCategoriesTrangChu);
    } else if (currentUrl.includes("thu-vien-sach")) {
      setListCategories(listCategoriesThuVienSach);
    }
  }, [location]);

  useEffect(() => {
    for (let i = 0; i < listCategories.length; i++) {
      if (currentUrl.includes(listCategories[i].pathName)) {
        setMenuSelected(i + 1);
        break;
      }
    }
  }, [listCategories, location]);

  const items2: MenuProps["items"] = listCategories.map(
    (item: ICategory, index) => {
      const key = String(index + 1);
      return {
        key: key,
        icon: null,
        label: `${item.name}`,
        onClick: () => {
          navigate(
            `${
              currentUrl.includes("trang-chu")
                ? "trang-chu"
                : currentUrl.includes("thu-vien-sach")
                ? "thu-vien-sach"
                : ""
            }/${item.pathName}`
          );
        },
      };
    }
  );

  return (
    <Sider>
      <Menu
        mode="inline"
        selectedKeys={[String(menuSelected)]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};
export default SideBarCustom;
