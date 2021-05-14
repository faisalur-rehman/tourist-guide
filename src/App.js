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
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import UserProfile from "./components/UserProfile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Hero />
            {/* <Cities /> */}
            <Categories />
            {/* <Faqs /> */}
            <Article />
            <Footer />
          </Route>
          <Route path="/user-profile">
            <Header />
            <UserProfile />
          </Route>
          <Route path="/online-tour-guide">
            <Header />
            <Profile />
          </Route>
          <Route path="/f2f-tour-guide">
            <Header />
            <Profile />
          </Route>
          <Route path="/tour-guide/:id">
            {/* <ProfileHeader /> */}
            <TourGuide />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
