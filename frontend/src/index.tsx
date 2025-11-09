import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/organisms/Header";
import Breadcrumb from "./components/molecules/Breadcrumb";
import ProductCard from "./components/organisms/ProductCard";
import PageWrapper from "./components/templates/PageWrapper";
import ProductGrid from "./components/organisms/ProductGrid";
import "./sass/theme.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    
    <PageWrapper>
      <Breadcrumb />
      <ProductGrid />
    </PageWrapper>
  </React.StrictMode>
);
