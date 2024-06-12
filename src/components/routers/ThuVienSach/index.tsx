import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Loadable from "../Loadable";

const ThuVienSach = Loadable(lazy(() => import("../../views/ThuVienSach")));

//
//
const ThuVienSachRoutes: RouteObject = {
  path: "thu-vien-sach",
  element: <Outlet />,
  children: [
    {
      path: "noi-dung-chinh",
      index: true,
      element: <ThuVienSach />,
    },
  ],
};

export default ThuVienSachRoutes;
