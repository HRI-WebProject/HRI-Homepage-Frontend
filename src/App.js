import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import NavBar from "./components/views/NavBar/NavBar";
import LoginPage from "./components/views/Login/Login";
import ResearchArea from "./components/views/ResearchArea/ResearchArea";
import Members from "./components/views/Members/Members";
import Professor from "./components/views/Professor/Professor";
import Board from "./components/views/Board/Board";
import Publications from "./components/views/Publications/Publications";
import Contact from "./components/views/Contact/Contact";
import Footer from "./components/views/Footer/Footer";
import { BackTop } from "antd";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div
        style={{
          padding: "100px 0px 30px 0px", // "100px 200px 30px 200px"
          minHeight: "", // "calc(200vh - 80px)"
        }}
      >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/research-area" component={ResearchArea} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/professor" component={Professor} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/publications" component={Publications} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <BackTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
