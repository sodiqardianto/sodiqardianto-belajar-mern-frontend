import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./components/Login"
import Users from "./pages/Users/Users"
import Products from "./pages/Products/Products"
import AddUser from "./pages/Users/AddUser"
import EditUser from "./pages/Users/EditUser"
import AddProduct from "./pages/Products/AddProduct"
import EditProduct from "./pages/Products/EditProduct"
import PrivateRoutes from "./utils/PrivateRoutes"
import AuthAdminAccess from "./utils/AuthAdminAccess"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<AuthAdminAccess />}>
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<AddUser />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
