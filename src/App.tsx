import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./components/Login"
import Users from "./pages/Users/Users"
import Products from "./pages/Products/Products"
import AddUser from "./pages/Users/AddUser"
import EditUser from "./pages/Users/EditUser"
import AddProduct from "./pages/Products/AddProduct"
import EditProduct from "./pages/Products/EditProduct"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
