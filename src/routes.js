/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import fiscalias from "./components/adminFiscalias/fiscalias";
import InsertarFiscalia from "./components/adminFiscalias/crearFiscalia";
//import Typography from "views/Typography/Typography.js";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/crearFiscalia",
    name: "Crear Fiscalía",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: InsertarFiscalia,
    layout: "/admin",
  },
  {
    path: "/fiscalias",
    name: "Administrar Fiscalías",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: fiscalias,
    layout: "/admin",
  },
];

export default dashboardRoutes;
