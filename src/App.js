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
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/research/researchArea" component={ResearchArea} />
          <Route
            exact
            path="/research/researchArea/:id/edit"
            component={ResearchAreaEdit}
          />
          <Route
            exact
            path="/research/researchArea/write"
            component={ResearchAreaWrite}
          />
          <Route exact path="/research/equipments" component={Equipments} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/members/:id/edit" component={MembersEdit} />
          <Route exact path="/members/write" component={MembersWrite} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/professor" component={Professor} />
          <Route exact path="/professor/:id/edit" component={ProfessorEdit} />
          <Route exact path="/professor/write" component={ProfessorWrite} />
          <Route exact path="/board/notice" component={Notice} />
          <Route exact path="/board/notice/write" component={NoticeWrite} />
          <Route exact path="/board/notice/:id" component={BoardDetail} />
          <Route exact path="/board/notice/:id/edit" component={NoticeEdit} />
          <Route exact path="/board/activity" component={Activity} />
          <Route exact path="/board/activity/write" component={ActivityWrite} />
          <Route
            exact
            path="/board/activity/:id/edit"
            component={ActivityEdit}
          />
          <Route exact path="/board/activity/:id" component={ActivityDetail} />
          <Route exact path="/publications/conference" component={Conference} />
          <Route exact path="/publications/book" component={Book} />
          <Route exact path="/publications/journal" component={Journal} />
          <Route exact path="/publications/patent" component={Patent} />
          <Route
            exact
            path="/publications/:type/:id/edit"
            component={PublicationEdit}
          />
          <Route
            exact
            path="/publications/write"
            component={PublicationWrite}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id/edit" component={ProjectsEdit} />
          <Route exact path="/projects/write" component={ProjectsWrite} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
      <BackTop />
    </BrowserRouter>
  );
}

export default App;
