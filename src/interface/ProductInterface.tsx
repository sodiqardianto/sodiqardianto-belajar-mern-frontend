interface ProductAttributes {
  id: number
  uuid: string
  name: string
  price: number
  user: User
}

interface User {
  id: number
  name: string
  email: string
}
