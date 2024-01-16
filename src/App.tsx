/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />

      <Route path="*" element={""} />
    </Routes>
  );
}

export default App;
