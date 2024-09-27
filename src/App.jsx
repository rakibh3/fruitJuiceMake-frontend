import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <>
      <main className="overflow-x-hidden bg-[#F1F5F9]">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
