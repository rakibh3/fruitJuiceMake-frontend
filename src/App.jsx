import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
