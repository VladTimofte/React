import {
  Routes,
  Route
} from "react-router-dom"
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />}>
      </Route>
        <Route path="/products" element={<Products />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
