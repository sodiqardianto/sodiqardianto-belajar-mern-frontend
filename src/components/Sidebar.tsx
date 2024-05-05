import React from "react"
import { NavLink } from "react-router-dom"
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Logout, reset } from "../features/authSlice"

export default function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state: any) => state.auth)

  const LogoutUser = () => {
    dispatch(Logout() as any)
    dispatch(reset())
    navigate("/")
  }

  return (
    <div>
      <aside className="menu has-shadow pl-3">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === "ADMIN" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white" onClick={LogoutUser}>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  )
}
