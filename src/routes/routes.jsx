import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import PageSignIn from "../pages/auth/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSignIn />} />
        {/* <Route path="/dashboard" element={<AuthRoutes />}>
          <Route index element={<Dashboard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

