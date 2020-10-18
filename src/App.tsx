import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import HelloPage from "./pages/hello-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello-page" element={<HelloPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

// https://99designs.fr/blog/tendances/tendances-en-design-web/
// https://www.webdesignertrends.com/2020/10/e-commerce-inspiration-design-ui-ux/
// https://graphiste.com/blog/inspiration-site-web-tendance-webdesign
// https://graphiste.com/blog/webdesign-tendances-2020
// https://www.awwwards.com/websites/


// https://getwaves.io/
// https://www.blobmaker.app/
// https://www.eggradients.com/