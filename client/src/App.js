import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Article from "./components/Article/article";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer";
import "./sample.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
