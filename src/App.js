import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "@/components/views/MainPage/MainPage";
import NavBar from "@/components/views/NavBar/NavBar";
import LoginPage from "@/components/views/Login/Login";
import ResearchArea from "@/components/views/ResearchArea/ResearchArea";
import ResearchAreaEdit from "@/components/views/ResearchArea/Admin/ResearchAreaEdit";
import ResearchAreaWrite from "@/components/views/ResearchArea/Admin/ResearchAreaWrite";
import Equipments from "@/components/views/ResearchArea/sections/Equipments";
import Members from "@/components/views/Members/Members";
import MembersEdit from "@/components/views/Members/Admin/MembersEdit";
import MembersWrite from "@/components/views/Members/Admin/MembersWrite";
import Alumni from "@/components/views/Alumni/Alumni";
import Professor from "@/components/views/Professor/Professor";
import ProfessorEdit from "@/components/views/Professor/Admin/ProfessorEdit";
import ProfessorWrite from "@/components/views/Professor/Admin/ProfessorWrite";
import Notice from "@/components/views/Board/Notice/Notice";
import NoticeWrite from "@/components/views/Board/Notice/Admin/NoticeWrite";
import NoticeEdit from "@/components/views/Board/Notice/Admin/NoticeEdit";
import BoardDetail from "@/components/views/Board/Notice/sections/BoardDetail";
import Activity from "@/components/views/Board/Activity/Activity";
import ActivityWrite from "@/components/views/Board/Activity/Admin/ActivityWrite";
import ActivityEdit from "@/components/views/Board/Activity/Admin/ActivityEdit";
import ActivityDetail from "@/components/views/Board/Activity/sections/ActivityDetail";
import Book from "@/components/views/Publications/Book/Book";
import Conference from "@/components/views/Publications/Conference/Conference";
import Journal from "@/components/views/Publications/Journal/Journal";
import Patent from "@/components/views/Publications/Patent/Patent";
import PublicationEdit from "@/components/views/Publications/Admin/PublicationEdit";
import PublicationWrite from "@/components/views/Publications/Admin/PublicationWrite";
import Projects from "@/components/views/Projects/Projects";
import ProjectsEdit from "@/components/views/Projects/Admin/ProjectsEdit";
import ProjectsWrite from "@/components/views/Projects/Admin/ProjectsWrite";
import Contact from "@/components/views/Contact/Contact";
import Footer from "@/components/views/Footer/Footer";
import PrivateRoute from "@/lib/PrivateRoute";
import PublicRoute from "@/lib/PublicRoute";
import { BackTop } from "antd";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import "@/App.less";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });
  const dispatch = useDispatch();

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
          <PublicRoute component={MainPage} path="/" exact />
          <PublicRoute restricted component={LoginPage} path="/login" exact />
          <PublicRoute
            component={ResearchArea}
            path="/research/researchArea"
            exact
          />
          <PrivateRoute
            component={ResearchAreaEdit}
            path="/research/researchArea/:id/edit"
            exact
          />
          <PrivateRoute
            component={ResearchAreaWrite}
            path="/research/researchArea/write"
            exact
          />
          <PublicRoute
            component={Equipments}
            path="/research/equipments"
            exact
          />
          <PublicRoute component={Members} path="/members" exact />
          <PrivateRoute
            component={MembersEdit}
            path="/members/:id/edit"
            exact
          />
          <PrivateRoute component={MembersWrite} path="/members/write" exact />
          <PublicRoute component={Alumni} path="/alumni" exact />
          <PublicRoute component={Professor} path="/professor" exact />
          <PrivateRoute
            component={ProfessorEdit}
            path="/professor/:id/edit"
            exact
          />
          <PrivateRoute
            component={ProfessorWrite}
            path="/professor/write"
            exact
          />
          <PublicRoute component={Notice} path="/board/notice" exact />
          <PrivateRoute
            component={NoticeWrite}
            path="/board/notice/write"
            exact
          />
          <PublicRoute component={BoardDetail} path="/board/notice/:id" exact />
          <PrivateRoute
            component={NoticeEdit}
            path="/board/notice/:id/edit"
            exact
          />
          <PublicRoute component={Activity} path="/board/activity" exact />
          <PrivateRoute
            component={ActivityWrite}
            path="/board/activity/write"
            exact
          />
          <PrivateRoute
            component={ActivityEdit}
            path="/board/activity/:id/edit"
            exact
          />
          <PublicRoute
            component={ActivityDetail}
            path="/board/activity/:id"
            exact
          />
          <PublicRoute
            component={Conference}
            path="/publications/conference"
            exact
          />
          <PublicRoute component={Book} path="/publications/book" exact />
          <PublicRoute component={Journal} path="/publications/journal" exact />
          <PublicRoute component={Patent} path="/publications/patent" exact />
          <PrivateRoute
            component={PublicationEdit}
            path="/publications/:type/:id/edit"
            exact
          />
          <PrivateRoute
            component={PublicationWrite}
            path="/publications/write"
            exact
          />
          <PublicRoute component={Projects} path="/projects" exact />
          <PrivateRoute
            component={ProjectsEdit}
            path="/projects/:id/edit"
            exact
          />
          <PrivateRoute
            component={ProjectsWrite}
            path="/projects/write"
            exact
          />
          <PublicRoute component={Contact} path="/contact" exact />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
      <Footer />
      <BackTop />
    </BrowserRouter>
  );
}

export default App;
