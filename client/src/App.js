import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Article from "./components/Article/Article";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer";
import "./sample.scss";
import Contact from "./components/Contact/Contact";
import Pay from "./components/Pay/Pay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
