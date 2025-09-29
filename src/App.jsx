import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Layout from "./components/common/Layout";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Sab sections Layout ke andar hi hain */}
        <Route path="/" element={<Layout />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;
