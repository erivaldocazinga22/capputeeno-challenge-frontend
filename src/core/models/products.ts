export interface ProductResponseData {
    data: Data
}
  
interface Data {
    allProducts: IProduct[]
}
  
export interface IProduct {
    id: string
    name: string
    description: string
    image_url: string
    category: string
    price_in_cents: number
    sales: number
    created_at: string
}

