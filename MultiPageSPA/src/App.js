import {
  Routes,
  Route,
  Navigate 
} from "react-router-dom"
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/delete" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
          </Route>
          <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/products/:productId" element={<ProductDetail />}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
