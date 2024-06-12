import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Loadable from "../Loadable";

const TrangChu = Loadable(lazy(() => import("../../views/TrangChu")));

//
//
const TrangChuRoutes: RouteObject = {
  path: "trang-chu",
  element: <Outlet />,
  children: [
    {
      path: "noi-dung-chinh",
      index: true,
      element: <TrangChu />,
    },
  ],
};

export default TrangChuRoutes;
