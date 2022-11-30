import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import App from "./App";

dayjs.locale("zh-cn");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <ConfigProvider componentSize="middle" input={{ autoComplete: "off" }}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ConfigProvider>
);
