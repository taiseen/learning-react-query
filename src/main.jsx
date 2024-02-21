import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./style/index.css";

const htmlRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

// crate a instance from QueryClient() for sharing at whole application
const queryClient = new QueryClient();

reactRoot.render(
  <React.StrictMode>

    {/* Context api || Composite ==> pattern */}
    <QueryClientProvider client={queryClient}>
      <App />

      {/* for dev tool at browser */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </React.StrictMode>
);