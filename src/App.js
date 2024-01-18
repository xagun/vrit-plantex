import "./App.css";
import "./assets/scss/styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Steps from "./components/Steps";
import Products from "./components/Products";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import ScrollRevealComponent from "./components/ScrollReveal";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollRevealComponent>
        {/* <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<Steps />} />
            <Route path="/about" element={<Products />} />
            <Route path="/products" element={<Questions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter> */}
        <Header />

        <Home />
        <About />
        <Steps />
        <Products />
        <Questions />
        <Contact />
        <Footer />
      </ScrollRevealComponent>
    </div>
  );
}

export default App;
