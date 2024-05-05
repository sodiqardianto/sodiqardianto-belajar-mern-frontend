import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const authAccess = () => {
  const { user } = useSelector((state: any) => state.auth)
  const navigate = useNavigate()

  if (user && user.role !== "ADMIN") {
    navigate("/dashboard")
  }

  return true
}
