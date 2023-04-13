import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import GlobalStyle from "./global/style";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
