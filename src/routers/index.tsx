import React from "react";
import loadable from "@loadable/component";
import Loading from "@stateless/Loading";
const loadableFunc = (path: string) =>
  loadable(() => import(path), {
    fallback: <Loading />,
  });
const Login = loadableFunc("../pages/login");
const Signup = loadableFunc("../pages/signup");
const HomeLayout = loadableFunc("../pages/layout");
const Home = loadableFunc("../pages/home");
const Demo = loadableFunc("../pages/demo");
const Coupons = loadableFunc("../pages/coupons");
const CouponsHome = loadableFunc("../pages/coupons/home");
const CouponsAdd = loadableFunc("../pages/coupons/add");
const CouponsEdit = loadableFunc("../pages/coupons/edit");
const CouponsDetail = loadableFunc("../pages/coupons/detail");
const Product = loadableFunc("../pages/product");
const Error = loadableFunc("../pages/error");
const NoMatch = loadableFunc("../components/stateless/NoMatch");

const rootRouter = [
  {
    path: "/",
    name: "首页",
    key: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name: "首页",
        key: "/",
        element: <Home />,
      },
      {
        index: false,
        path: "demo",
        name: "Demo",
        key: "/demo",
        element: <Demo />,
      },
      {
        index: false,
        path: "coupons",
        name: "前端技术栈",
        isSubMenu: true, // 是否是子菜单 proSecNav
        key: "/coupons",
        element: <Coupons />,
        children: [
          {
            index: false,
            path: "home",
            name: "React",
            key: "/coupons/home",
            element: <CouponsHome />,
          },
          {
            index: false,
            name: "Vue",
            path: "add",
            key: "/coupons/add",
            element: <CouponsAdd />,
          },
          {
            index: false,
            path: "edit",
            name: "Angular",
            key: "/coupons/edit",
            element: <CouponsEdit />,
          },
          {
            index: false,
            path: "detail",
            name: "Node",
            key: "/coupons/detail",
            element: <CouponsDetail />,
          },
        ],
      },
      {
        index: false,
        path: "product",
        name: "后端技术栈",
        key: "/product",
        element: <Product />,
      },
      {
        index: false,
        path: "error",
        name: "Error",
        key: "/error",
        element: <Error />,
      },
      {
        path: "*",
        name: "No Match",
        key: "*",
        element: <NoMatch />,
      },
    ],
  },
  {
    index: false,
    path: "login",
    name: "登录",
    key: "/login",
    element: <Login />,
  },
  {
    index: false,
    path: "signup",
    name: "注册",
    key: "/signup",
    element: <Signup />,
  },
];

export default rootRouter;
