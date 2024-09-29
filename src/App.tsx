import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// INIT AXIOS INTERCEPTORS
import './lib/axios/interceptors'

// PAGES
// import Home from "./pages/home/Home";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";
import Resume from "./pages/resume";

// STYLES
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader/Loader";


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
      </Router>
      <Loader/>
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
