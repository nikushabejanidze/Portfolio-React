import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <Header />

      <main className=" px-4 bg-gray-100 py-10 mt-10 ml-auto mr-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App;

