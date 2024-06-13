import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Loadable from "../Loadable";

const TrangChu = Loadable(lazy(() => import("../../views/TrangChu")));

const ChiTietBaiViet = Loadable(
  lazy(() => import("../../views/TrangChu/ChiTietBaiViet"))
);

const TrangChuRoutes: RouteObject = {
  path: "trang-chu",
  element: <Outlet />,
  children: [
    {
      path: "nuoi-day-con",
      index: true,
      element: <TrangChu />,
    },
    {
      path: "nuoi-day-con/:id",
      index: true,
      element: <ChiTietBaiViet />,
    },
  ],
};

export default TrangChuRoutes;
