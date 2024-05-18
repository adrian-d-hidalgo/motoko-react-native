import { createRoot } from "react-dom/client";

import "../global.css";
import App from "./App";
import { AuthContextProvider } from "./auth.context";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
