import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

const RootComponent = (
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
);

createRoot(rootElement).render(
    import.meta.env.DEV ? <StrictMode>{RootComponent}</StrictMode> : RootComponent
);
