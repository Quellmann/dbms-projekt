import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dark:bg-slate-900 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
export default App;
