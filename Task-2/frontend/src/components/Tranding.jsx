import ProductCard from "./ProductCard"
import {latestProducts} from "../data/productsData.js"

const Tranding = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 px-32">
    <h1 className="text-4xl m-5 font-semibold">Trending Products</h1>
    <div className="mt-10 lg:flex sm:grid sm:grid-cols-2 " >
    {
        latestProducts.map((product,i) =>{
            return <ProductCard key={i} name={product.name} image={product.image} ratings={product.ratings} actual_price={product.actual_price} discount_price={product.discount_price}/>
        })
    }
    </div>
    <button className="py-3 px-6 bg-red-800 text-white mt-10">More</button>
    </div>
  )
}

export default Tranding