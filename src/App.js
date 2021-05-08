import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Cities from "./components/Cities/Cities";
// import Faqs from "./components/FAQS/Faq";
import Categories from "./components/Categories/Categories";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TourGuide from "./components/TourGuide/TourGuide";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Cities />
            <Categories />
          </Route>
          <Route path="/online-tour-guide">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </Route>
          <Route path="/f2f-tour-guide">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </Route>
          <Route path="/tour-guide">
            <TourGuide />
          </Route>
        </Switch>
        {/* <Faqs /> */}
      </Router>
    </div>
  );
}

export default App;
