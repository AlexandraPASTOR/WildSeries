import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBarre from "./components/NavBarre/NavBarre";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <NavBarre />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;
