import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./components/CityList";
import { useState, useEffect } from "react";

const URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          {/* if we are using nested routes then we need a separate closing tag */}
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          {/* index routing making it the default route whenever we are reaching a parent router */}
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countires" element={<p>countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
