import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const titles: Record<string, string> = {
  "/": "StudyTask | Organização acadêmica",
  "/sobre": "Sobre | StudyTask",
  "/login": "Entrar | StudyTask",
  "/dashboard": "Painel | StudyTask",
  "/contato": "Contato | StudyTask"
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? "Página não encontrada | StudyTask";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <div id="conteudo" className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
