import type { MenuProps } from "antd";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { ICategory } from "../../../global/interface";
import { listCategoriesTrangChu } from "../../../fakeData";

const items2: MenuProps["items"] = listCategoriesTrangChu.map(
  (item: ICategory, index) => {
    const key = String(index + 1);
    return {
      key: `${item.id}`,
      icon: null,
      label: `${item.name}`,
    };
  }
);

const SideBarCustom = () => {
  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};
export default SideBarCustom;
