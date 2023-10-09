import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
