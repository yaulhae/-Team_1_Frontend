import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Button, Grid, Image, Input, Text } from "./common";
import InspireItemPage from "./pages/InspireItemPage";
import InspireListPage from "./pages/InspireListPage";
import InspireWritePage from "./pages/InspireWritePage";
import LoginPage from "./pages/LoginPage";
import MemoListPage from "./pages/MemoListPage";
import MemoWritePage from "./pages/MemoWritePage";
import SignUpPage from "./pages/SignUpPage";
import WelComePage from "./pages/WelComePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelComePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/inspire_list" element={<InspireListPage />} />
      <Route path="/inspire_write" element={<InspireWritePage />} />
      <Route path="/inspire_list/:id" element={<InspireItemPage />} />
      <Route
        path="/inspire_list/:inspire_id/memos_list/:memo_id"
        element={<MemoListPage />}
      />
      <Route path="/memo_write" element={<MemoWritePage />} />
    </Routes>
  );
}

export default App;
