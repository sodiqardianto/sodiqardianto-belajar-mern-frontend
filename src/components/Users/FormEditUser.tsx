import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function FormEditUser() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [msg, setMsg] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`)
      setName(response.data.name)
      setEmail(response.data.email)
      setRole(response.data.role)
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const updateUser = async (e: any) => {
    e.preventDefault()

    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        role: role,
        password: password,
        confirmPassword: confirmPassword,
      })
      navigate("/users")
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Edit user</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e: any) => setRole(e.target.value)}
                    >
                      <option value="ADMIN">Admin</option>
                      <option value="USER">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                    value={confirmPassword}
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-success has-text-white"
                    type="submit"
                  >
                    Change
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
