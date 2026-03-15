import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

// IMPORTANT: basename must match your GitHub Pages path.
// If site is at https://jal821.github.io/cocktails4you/ use "/cocktails4you".
// If you later move to https://jal821.github.io/ only, change to "/".
const basename = "/cocktails4you";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
