import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
