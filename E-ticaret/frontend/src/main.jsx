import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CartProvider from "./context/CardProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <MainLayout>
      <App />
    </MainLayout>
  </CartProvider>
);
