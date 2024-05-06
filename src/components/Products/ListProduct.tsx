import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductList() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products")
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const deleteProduct = async (uuid: string) => {
    await axios.delete(`http://localhost:5000/products/${uuid}`)
    getProducts()
  }

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of products</h2>

      <Link to={"/products/create"} className="button is-primary mb-2">
        Add Product
      </Link>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: ProductAttributes, index: number) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                  onClick={() => deleteProduct(product.uuid)}
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
