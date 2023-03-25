import Navbar from "./Components/Navbar/Navbar";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Media from "./pages/media/Media";
import AboutUs from "./pages/aboutus/AboutUs";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="App container-fluid">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="home" element={<Home />}></Route>
            <Route path="/media" element={<Media />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" component={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
