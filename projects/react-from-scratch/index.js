import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// const App = () => {
//   return <h1>This is a React Script!</h1>;
// };

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App message="Hey there! You're now using a component from another file!" />,
);
