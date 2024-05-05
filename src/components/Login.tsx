import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginUser, reset } from "../features/authSlice"
import { AppDispatch } from "../app/store"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.auth,
  )

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard")
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = (e: any) => {
    e.preventDefault()
    dispatch(LoginUser({ email, password }))
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box" onSubmit={Auth}>
                <h1 className="title is-2 has-text-centered">Sign In</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
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
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {isError && (
                  <div className="notification is-danger">
                    <button
                      className="delete"
                      onClick={() => dispatch(reset())}
                    ></button>
                    {message}
                  </div>
                )}
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth has-text-white"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
