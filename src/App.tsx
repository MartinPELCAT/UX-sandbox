import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FallbackPage from "./pages/fallback-page";
import { allPages } from "./routes";

export default function App() {
  return (
    <Suspense fallback={<FallbackPage />}>
      <BrowserRouter>
        <Routes>
          {allPages.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
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
