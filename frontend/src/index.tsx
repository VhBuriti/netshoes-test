import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/organisms/Header";
import Breadcrumb from "./components/molecules/Breadcrumb";
import ProductCard from "./components/organisms/ProductCard";
import PageWrapper from "./components/templates/PageWrapper";
import ProductGrid from "./components/organisms/ProductGrid";
import HomePage from "./components/pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./sass/theme.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <PageWrapper>
          <Breadcrumb />
          <ProductGrid />
        </PageWrapper>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
