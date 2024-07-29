import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Workout } from "./components/Pages/Workout";
import { Progress } from "./components/Pages/Progress";
import { Profile } from "./components/Pages/Profile";
import { Login } from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import AdminDashboard from "./components/Pages/AdminDashboard";
import Footer from "./components/Pages/Footer";
import PrivateRoute from "./components/Pages/PrivateRoute";
import { useState, useEffect } from "react";
import Modal from "./components/Pages/PrivateModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  const noNavBarRoutes = ["/admindashboard"];
  const noFooterRoutes = ["/admindashboard", "/login", "/signup"];

  useEffect(() => {
    const restrictedPaths = ["/progress", "/profile", "/admindashboard"];
    const isRestricted = restrictedPaths.includes(location.pathname);

    // Check if the route is restricted and show modal if not authenticated
    if (isRestricted) {
      // Assume you have a way to check if the user is authenticated
      const isAuthenticated = false; // Replace with actual authentication check

      if (!isAuthenticated) {
        setModalMessage('Please login to access this page.');
        setIsModalOpen(true);
      }
    }
  }, [location]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/login'); // Redirect to login after closing the modal
  };

  return (
    <>
      {noNavBarRoutes.indexOf(location.pathname) === -1 && <NavBar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/progress" element={<PrivateRoute element={Progress} />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admindashboard" element={<PrivateRoute element={AdminDashboard} />} />
        </Routes>
        {noFooterRoutes.indexOf(location.pathname) === -1 && <Footer />}
      </div>

      {isModalOpen && <Modal message={modalMessage} onClose={handleModalClose} />}
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
