import React from "react";
import { Layout } from "antd";
import { HomeTabProvider } from "@hooks/proTabsContext";
import HomeHeader from "./home-header";
import HomeSider from "./home-sider";
import HomeContent from "./home-content";

import "./index.less";

const HomeLayout = () => (
  // const onRenderCallback = (id,phase,actualDuration,baseDuration,startTime,commitTime,interactions) => {
  //   console.log('id',id)
  //   console.log('phase',phase)
  //   console.log('actualDuration',actualDuration)
  //   console.log('baseDuration',baseDuration)
  //   console.out('startTime',startTime)
  //   console.log('commitTime',commitTime)
  //   console.log('interactions',interactions)
  // }
  <Layout className="home-layout">
    <HomeTabProvider>
      <HomeHeader />
      <Layout className="home-layout">
        <HomeSider />
        {/* <Profiler id="ProContext" onRender={onRenderCallback}> */}
        <HomeContent />
        {/* </Profiler> */}
      </Layout>
    </HomeTabProvider>
  </Layout>
);

export default HomeLayout;
