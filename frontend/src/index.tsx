import ReactDOM from "react-dom/client";
import Header from "./components/organisms/Header";
import Breadcrumb from "./components/molecules/Breadcrumb";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WishlistPage from "./components/pages/Wishlist";
import HomePage from "./components/pages/Home";
import { WishlistProvider } from "./context/WishlistContext";
import "./sass/theme.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Header />
    <WishlistProvider>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </WishlistProvider>
  </BrowserRouter>
);
