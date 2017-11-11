import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Search}/>
        <Route exact path="/results/:topic/:startYear/:endYear" component={Results}/>
        <Route exact path="/saved" component={Saved}/>
      </Wrapper>
      <Footer/>
    </div>
  </Router>;

export default App;
