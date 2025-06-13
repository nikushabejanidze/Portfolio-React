import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-8 px-4">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
          <Header />

          <main className="p-6">
            {/* მარშრუტები პირდაპირ */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<Post />} />
            </Routes>
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;

