import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { GetProfile } from "./authSlice"

export const authCheck = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError, user } = useSelector((state: any) => state.auth)

  useEffect(() => {
    dispatch(GetProfile() as any)
    if (isError) {
      navigate("/")
    }
  }, [dispatch, isError, navigate])

  return true
}
