import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import GlobalStyle from "./global/style";
// import Card from "./components/card";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
