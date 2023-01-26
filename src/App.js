import { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import ViewProductPage from "./pages/ViewProduct/ViewProductPage";
import EditProductPage from "./pages/EditProduct/EditProduct";
import "./styles.css";

const productsData = [
  {
    id: 1,
    name: "iMac",
    type: "computer",
    price: 1400,
    inventory: {
      quantity: 100,
      incomingDelivery: false
    }
  },
  {
    id: 2,
    name: "Macbook Pro",
    type: "computer",
    price: 2000,
    inventory: {
      quantity: 10,
      incomingDelivery: true
    }
  },
  {
    id: 3,
    name: "iPad Mini",
    type: "tablet",
    price: 600,
    inventory: {
      quantity: 200,
      incomingDelivery: false
    }
  },
  {
    id: 4,
    name: "iPad Pro",
    type: "tablet",
    price: 800,
    inventory: {
      quantity: 0,
      incomingDelivery: true
    }
  }
];

const appsData = [
  {
    id: 1,
    name: "Farmville",
    type: "game",
    price: 0
  },
  {
    id: 2,
    name: "Facebook",
    type: "social",
    price: 0
  }
];

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/products/:id/edit" element={<EditProductPage setProducts={setProducts} products={products} />} />
        <Route path="/products/:id" element={<ViewProductPage />} />
        <Route path="/products" element={<ProductsPage products={products} />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
