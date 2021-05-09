import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Cities from "./components/Cities/Cities";
import Faqs from "./components/FAQS/Faq";
import Categories from "./components/Categories/Categories";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TourGuide from "./components/TourGuide/TourGuide";
import Article from "./components/Articles/Article";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            {/* <Cities /> */}
            <Categories />
            {/* <Faqs /> */}
            <Article />
            <Footer />
          </Route>
          <Route path="/online-tour-guide">
            <Profile />
          </Route>
          <Route path="/f2f-tour-guide">
            <Profile />
          </Route>
          <Route path="/tour-guide">
            <TourGuide />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
