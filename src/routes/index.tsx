import GlobalStyle from "../global/style";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/PageNotFound";
import ForgotPassword from "../pages/ForgotPass";

function RoutesComponent() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
