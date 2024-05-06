import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function FormEditProduct() {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setName(response.data.name)
        setPrice(response.data.price)
      } catch (error: any) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getProduct()
  }, [id])

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [msg, setMsg] = useState()

  const updateProduct = async (e: any) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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
      <h2 className="subtitle">Edit product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
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
