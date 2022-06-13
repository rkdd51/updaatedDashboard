import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// style={{
//   position: "absolute",
//   left: "15%",
//   right: "79.79%",
//   top: "6.05%",
//   bottom: "91.89%",
//   fontFamily: "Roboto",
//   fontStyle: "normal",
//   fontWeight: "500",
//   fontSize: "14px",
//   lineHeight: "16px",

//   color: "#000000"
// }}

// style={{
//   position: "absolute",
//   left: "81.74%",
//   right: "11.94%",
//   top: "4%",
//   bottom: "92.77%",

//   fontFamily: "Roboto",
//   fontStyle: "normal",
//   fontWeight: "500",
//   fontSize: "25px",
//   lineHeight: "29px",

//   color: "#000000"
// }}

// style={{
//   position: "absolute",
//   left: "92.64%",
//   right: "1.94%",
//   top: "4.2%",
//   bottom: "94.34%",
//   fontFamily: "Roboto",
//   fontStyle: "normal",
//   fontWeight: "500",
//   fontSize: "12px",
//   lineHeight: "14px",
//   color: "#000000"
// }}
