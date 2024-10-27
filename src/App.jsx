import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
