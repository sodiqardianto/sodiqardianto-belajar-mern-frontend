import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { authCheck } from "../features/authCheck"

export default function PrivateRoutes() {
  let auth = authCheck()
  return auth ? <Outlet /> : <Navigate to="/" />
}
