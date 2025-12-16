import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* FilterSidebar CategoryFilter PriceFilter ColorFilter BrandFilter */
}
{
  /* GLOBAL Header Footer Layout Breadcrumb HOME PAGE HomePage HeroBanner
      FeatureSection ProductPreviewGrid PromoBanner Newsletter SHOP PAGE
      ShopPage FilterSidebar ShopHeader ProductGrid ProductCard Pagination
      PRODUCT DETAILS PAGE ProductDetailsPage ProductGallery ProductInfo
      ProductTabs RelatedProducts ABOUT PAGE AboutPage AboutHero AboutContent
      MissionSection TeamSection CONTACT PAGE ContactPage ContactInfo
      ContactForm MapSection CART PAGE CartPage CartItem CartSummary CouponInput
      CHECKOUT PAGE CheckoutPage BillingForm ShippingForm OrderSummary
      PaymentMethod AUTH PAGES LoginPage RegisterPage AuthForm REUSABLE UI
      Button RatingStars ColorSelector QuantitySelector AddToCartButton */
}
