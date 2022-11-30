import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Watermark from "@stateless/Watermark";
import rootRouter from "./routers";
import "antd/dist/reset.css";
import "./styles/reset.css";
function App() {
  const [loading, setLoading] = useState(true);
  const asyncCall = () => new Promise<void>((r) => setTimeout(() => r(), 500));
  useEffect(() => {
    // sentryInit()
    asyncCall()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
    Watermark({
      content: "南京万米信息科技有限公司",
      container: document.getElementById("root"),
    });
  }, []);
  const element = useRoutes(rootRouter as any);
  if (loading) return null;
  return element;
}

export default App;
