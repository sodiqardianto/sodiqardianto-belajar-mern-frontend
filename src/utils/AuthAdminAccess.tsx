import { Navigate, Outlet } from "react-router-dom"
import { authAccess } from "../features/authAccess"

export default function AuthAdminAccess() {
  let auth = authAccess()
  return auth ? <Outlet /> : <Navigate to="/dashboard" />
}
