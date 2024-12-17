import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";
import Login from "./pages/login/Login.jsx";

function Layout() {
  const location = useLocation();
  let admin = true;
  try {
    const persistedRoot = localStorage.getItem("persist:root");
    if (persistedRoot) {
      const user = JSON.parse(JSON.parse(persistedRoot).user);
      admin = user?.currentUser?.isAdmin || false; // Fallback to false if undefined
    }
  } catch (error) {
    console.error("Error parsing localStorage:", error);
  }
  // const admin =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  return (
    <>
      <Topbar />
      <div className="container">
        {location.pathname !== "/login" && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          {admin && <>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          </>}
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
