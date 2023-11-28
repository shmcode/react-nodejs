import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sesin } from "./screens/Sesin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Sesin />);
