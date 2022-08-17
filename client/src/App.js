import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Article from "./components/Article/Article";
import ArticleDetail from "./components/Article/ArticleDetail/ArticleDetail";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Pay from "./components/Pay/Pay";
import PayDetail from "./components/Pay/PayDetail/PayDetail";
import Recruit from "./components/Recruit/Recruit";
import Notice from "./components/Notice/Notice";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay/:id" element={<PayDetail />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
