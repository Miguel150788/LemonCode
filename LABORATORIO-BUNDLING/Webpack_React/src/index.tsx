import React from "react";
import { createRoot } from "react-dom/client";
import logo from './content/logo_1.png';
import {AverageComponent} from './AverageComponent';

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hola Mundo</h1>
    <img src={logo} style={{ width: 150 }} />
    <AverageComponent/>
  </div>
);
