import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import ScrollToTop from "./components/ScrollToTop";

import Handmade from "./pages/Handmade";
import Gifting from "./pages/Gifting";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import CollectionsPage from "./pages/CollectionsPage";
import HumanFigureCollection from "./pages/HumanFigure";
import NatureCollection from "./pages/NatureCollection";
import SpiritualCollection from "./pages/SpiritualCollection";
import HistoricalCollection from "./pages/HistoricalCollection";
import AbstractCollection from "./pages/AbstractCollection";
import WallArt from "./pages/WallArt";
import Sculptures from "./pages/Sculptures";

import About from "./pages/About";
import WoodenSculptures from "./pages/WoodenSculptures";

import PumpkinLamps from "./pages/PumpkinLamps";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function RedirectGourdLampProduct() {
  const { id } = useParams();
  return <Navigate to={`/collections/pumpkin-lamps/${id}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/wall-art" element={<WallArt />} />

        <Route path="/handmade" element={<Handmade />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route
          path="/collections/gourd-lamps/:id"
          element={<RedirectGourdLampProduct />}
        />
        <Route path="/collections/:category/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/collections/wooden-creations/sculptures"
          element={<WoodenSculptures />}
        />
        <Route
          path="/collections/wooden-sculptures"
          element={
            <Navigate to="/collections/wooden-creations/sculptures" replace />
          }
        />

        <Route
          path="/collections/wooden-creations/pumpkin-lamps"
          element={<PumpkinLamps />}
        />
        <Route
          path="/collections/pumpkin-lamps"
          element={
            <Navigate
              to="/collections/wooden-creations/pumpkin-lamps"
              replace
            />
          }
        />
        <Route
          path="/collections/wooden-creations/gourd-lamps"
          element={
            <Navigate
              to="/collections/wooden-creations/pumpkin-lamps"
              replace
            />
          }
        />
        <Route
          path="/collections/gourd-lamps"
          element={
            <Navigate
              to="/collections/wooden-creations/pumpkin-lamps"
              replace
            />
          }
        />

        <Route
          path="/collections/human-figure"
          element={<HumanFigureCollection />}
        />
        <Route path="/collections/nature" element={<NatureCollection />} />
        <Route
          path="/collections/spiritual"
          element={<SpiritualCollection />}
        />
        <Route
          path="/collections/historical"
          element={<HistoricalCollection />}
        />
        <Route path="/collections/abstract" element={<AbstractCollection />} />
        <Route path="/collections/wallart" element={<WallArt />} />
        <Route path="/collections/sculptures" element={<Sculptures />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
