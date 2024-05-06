import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function UserList() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users")
    setUsers(response.data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = async (uuid: string) => {
    await axios.delete(`http://localhost:5000/users/${uuid}`)
    getUsers()
  }

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of users</h2>

      <Link to={"/users/create"} className="button is-primary mb-2">
        Add User
      </Link>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserAttributes, index: number) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                  onClick={() => deleteUser(user.uuid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
