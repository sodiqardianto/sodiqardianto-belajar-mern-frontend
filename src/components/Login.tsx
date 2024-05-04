import React from "react"

export default function Login() {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box">
                <h1 className="title is-2 has-text-centered">Sign In</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="Email" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="******" />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth has-text-white">
                    Login
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
