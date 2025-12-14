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
