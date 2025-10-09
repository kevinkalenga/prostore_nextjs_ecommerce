// import sampleData from "@/db/sample-data"
import ProductList from "@/components/shared/product/product-list"
import { getLatestProducts } from "@/lib/actions/product.actions"

const Homepage = async () => {
  const latestProducts = await getLatestProducts()

  // Conversion sécurisée et complète pour matcher le type Product
  const formattedProducts = latestProducts.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    brand: p.brand,
    description: p.description,
    stock: p.stock,
    images: p.images,
    isFeatured: p.isFeatured,
    banner: p.banner,
    price: p.price.toString(),   // Decimal -> string
    rating: Number(p.rating),    // Decimal -> number
    createdAt: p.createdAt,      // Date
  }))

  return (
    <>
      <ProductList data={formattedProducts} title="Newest Arrivals" limit={4} />
    </>
  )
}

export default Homepage

