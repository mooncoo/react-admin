import React, { useEffect, useState } from "react";
// import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { useNavigate, useLocation } from "react-router-dom";

import { Breadcrumb, Button } from "antd";
import rootRouter from "@src/routers";
import { getRouteItem, getRouteList } from "./util";
interface route {
  key: string;
  isSubMenu: boolean;
  name: string;
}
const ProBreadcrumb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const breadcrumbs = useBreadcrumbs()
  const [breadcrumbList, setBreadcrumbList] = useState([] as any);

  useEffect(() => {
    const routeList = getRouteList(
      [],
      getRouteItem(rootRouter, pathname)
        ? [getRouteItem(rootRouter, pathname)]
        : [],
      pathname
    );

    if (routeList.length === 0) {
      setBreadcrumbList([
        { path: "/", name: "首页", key: "/", isSubMenu: false },
        { path: "404", name: "Not Found", key: "/404", isSubMenu: false },
      ]);
    } else {
      setBreadcrumbList([...routeList]);
    }
  }, [pathname]);

  const linkTo = (path: string) => {
    navigate(path);
  };

  return (
    <Breadcrumb separator=">">
      {breadcrumbList.map((item: route, i: number) => {
        const { key, isSubMenu, name } = item;
        return i !== breadcrumbList.length - 1 ? (
          <Breadcrumb.Item className="home-breadcrumb" key={key}>
            {isSubMenu ? (
              <Button disabled type="link" style={{ padding: 0 }}>
                {name}
              </Button>
            ) : (
              <Button
                type="link"
                style={{ padding: 0 }}
                onClick={() => linkTo(key)}
              >
                {name}
              </Button>
            )}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item className="home-breadcrumb" key={key}>
            {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default ProBreadcrumb;
