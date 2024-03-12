import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
