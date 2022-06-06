import React from "react";
import { createRoot } from "react-dom/client";
import { RouterConfig } from "./RouterConfig";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterConfig />);
