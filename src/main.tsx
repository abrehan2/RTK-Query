// IMPORTS -
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
// import { API } from "./redux/api.ts";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <ApiProvider api={API}>
      <App />
    </ApiProvider> */}

    <Provider store={store}>
      <App />
    </Provider>
  </>
);
