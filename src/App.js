import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "@/components/views/MainPage/MainPage";
import NavBar from "@/components/views/NavBar/NavBar";
import LoginPage from "@/components/views/Login/Login";
import ResearchArea from "@/components/views/ResearchArea/ResearchArea";
import Members from "@/components/views/Members/Members";
import Alumni from "@/components/views/Alumni/Alumni";
import Professor from "@/components/views/Professor/Professor";
import Board from "@/components/views/Board/Board";
import Activity from "@/components/views/Activity/Activity";
import Journal from "@/components/views/Journal/Journal";
import Patent from "@/components/views/Patent/Patent";
import Projects from "@/components/views/Projects/Projects";
import Contact from "@/components/views/Contact/Contact";
import Footer from "@/components/views/Footer/Footer";
import { BackTop } from "antd";
import { useMediaQuery } from "react-responsive";
import "@/App.less";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });
  return (
    <BrowserRouter>
      <NavBar />
      <div
        style={{
          padding: "150px 0px 30px 0px", // "100px 200px 30px 200px",
          minHeight: "", // "calc(200vh - 80px)"
          backgroundColor: "#f5f5f5",
        }}
      >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/research-area" component={ResearchArea} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/professor" component={Professor} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/publications/journal" component={Journal} />
          <Route exact path="/publications/patent" component={Patent} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
      <BackTop />
    </BrowserRouter>
  );
}

export default App;
