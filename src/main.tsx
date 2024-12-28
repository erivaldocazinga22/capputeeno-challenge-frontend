import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./globals.css";

import { Routers } from "./router";
import { CartProvider } from "./core/contexts/cart/cartProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
          <RouterProvider router={Routers} />
          <Toaster />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
