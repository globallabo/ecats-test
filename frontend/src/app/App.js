import { Routes, Route } from "react-router-dom";

import Test from "../features/test/Test";
import Admin from "../features/admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
