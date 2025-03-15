import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <Routes>
      {/* Redirect the root path to /Main */}
      <Route path="/" element={<Navigate to="/Main" replace />} />
      <Route path="/Main/*" element={<Main />} />
    </Routes>
  );
}

export default App;
