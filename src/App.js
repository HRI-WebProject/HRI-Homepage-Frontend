import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import ResearchArea from "./components/views/ResearchArea/ResearchArea";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/research" component={ResearchArea} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
