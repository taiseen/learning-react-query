import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

import "react-toastify/dist/ReactToastify.css";


const htmlRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

// crate a instance from QueryClient() for sharing at whole application
const queryClient = new QueryClient();

// 🟩 Global level react-query parameter settings apply here...
// 🟩 or centralized management system apply from here...
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 5 // Infinity
//     }
//   }
// });

reactRoot.render(
  <React.StrictMode>

    {/* Context api || Composite ==> pattern */}
    <QueryClientProvider client={queryClient}>
      <App />

      {/* for dev tool at browser */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    <ToastContainer theme="colored" position="top-right" autoClose={5000} />

  </React.StrictMode>
);