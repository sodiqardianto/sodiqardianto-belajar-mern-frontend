import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function FormAddProduct() {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [msg, setMsg] = useState()
  const navigate = useNavigate()

  const saveProduct = async (e: any) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      })
      navigate("/products")
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div>
      <h1 className="title">Product</h1>
      <h2 className="subtitle">Add new product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
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
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Price"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-success has-text-white"
                    type="submit"
                  >
                    Save
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
