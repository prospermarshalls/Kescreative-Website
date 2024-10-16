import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LayoutApp } from "./Portfolio Page/LayoutApp";
import { MainPage } from "./MainPage/MainPage";
import { PageHeader } from "./layouts/Sections/Page-header/PageHeader";
import { FooterStructure } from "./components/footer-structure/FooterStructure";

export default function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Router>
        <PageHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<LayoutApp />} />
        </Routes>
        <FooterStructure />
      </Router>
    </div>
  );
}
