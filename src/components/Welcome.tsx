import React from "react"
import { useSelector } from "react-redux"

export default function Welcome() {
  const user = useSelector((state: any) => state.auth.user)
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">Welcome Back {user && user.name}</h2>
    </div>
  )
}
