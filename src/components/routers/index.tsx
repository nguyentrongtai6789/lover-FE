// import ProtectedRoute from "components/ProtectedRoute";
// import MainLayout from "layouts/Auth";
// import DashboardLayout from "layouts/Dashboard";
import { RouteObject, useRoutes } from "react-router-dom";
import DefaultLayout from "./DefautLayout";
import TrangChuRoutes from "./TrangChu";
import VeChungToiRoutes from "./VeChungToi";
import ThuVienSachRoutes from "./ThuVienSach";

const routes: RouteObject[] = [
  {
    path: "book-store",
    element: <DefaultLayout />,
    children: [TrangChuRoutes, VeChungToiRoutes, ThuVienSachRoutes],
  },
];

const Routers = () => {
  const element = useRoutes(routes);
  return element;
};

export default Routers;
