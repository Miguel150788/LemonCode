import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Login/login";
import { ListPage } from "./Api-GitHub/list-Api-github";
import { DetailPage } from "./Detail/detail";
import { MyUserProvider } from "./List-Principal/list-user-data";
import { MyListPrincipal } from "./List-Principal/list-principal";
import { ListApiRickMorty } from "./Api-RickMorty/list-Api-RickMorty";

export const App = () => {
  return (
    <MyUserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/listPrincipal" element={<MyListPrincipal />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/listRick" element={<ListApiRickMorty />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MyUserProvider>
  );
};
