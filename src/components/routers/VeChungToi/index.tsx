import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Loadable from "../Loadable";

const VeChungToi = Loadable(lazy(() => import("../../views/VeChungToi")));

//
//
const VeChungToiRoutes: RouteObject = {
  path: "ve-chung-toi",
  element: <Outlet />,
  children: [
    {
      path: "noi-dung-chinh",
      index: true,
      element: <VeChungToi />,
    },
  ],
};

export default VeChungToiRoutes;
