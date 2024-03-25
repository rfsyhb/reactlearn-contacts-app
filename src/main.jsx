import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

const root = createRoot(document.getElementById("root"));
// root.render(<p>haloo</p>);
root.render(<ContactApp />);