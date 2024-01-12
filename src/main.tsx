// IMPORTS -
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import {API} from "./redux/api.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ApiProvider api={API}>
      <App />
    </ApiProvider>
  </>
);
