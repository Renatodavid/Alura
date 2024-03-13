import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import NovaConta from "./NovaConta";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="NovaConta" element={<NovaConta />} />
    </Routes>
  </Router>
);
