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
import RecruitDetail from "./components/Recruit/RecruitDetail/RecruitDetail";
import Metaverse from "./components/Metaverse/Metaverse";
import Original from "./components/Original/Original";
import Company from "./components/Company/Company";
import Agreement from "./components/Agreement/Agreement";

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
        <Route path="/recruit/:id" element={<RecruitDetail />} />
        <Route path="/metaverse" element={<Metaverse />} />
        <Route path="/original" element={<Original />} />
        <Route path="/roowa" element={<Company />} />
        <Route path="/agreement/:type" element={<Agreement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
