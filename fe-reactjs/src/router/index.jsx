/** React */
import { Routes, Route } from "react-router-dom";

/** Layouts */
import MainLayout from "layouts/MainLayout";

/** Private Route */
import PrivateRoute from "./PrivateRoute";

/** Public Pages */
import { HomePage, AboutPage, ProductDetailPage } from "pages/Publics";
import { NotFoundPage, UnauthorizedPage, ForbiddenPage } from "pages/Errors";
import { SignInPage, SignUpPage, ForgotPasswordPage } from "pages/Auth";

/** Private Pages */
import { ProfilePage, CartPage } from "pages/Privates";

const Router = () => {
  return (
    <Routes>
      {/* Public routes - no layout */}
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forgot-pasword" element={<ForgotPasswordPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/forbidden" element={<ForbiddenPage />} />

      {/* Routes with layout (some are private inside) */}
      <Route element={<MainLayout />}>
        {/* Public pages with layout */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />

        {/* Private pages */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
