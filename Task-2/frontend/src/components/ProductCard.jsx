
const ProductCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 m-2 w-80 relative">
    <img className=" w-64 h-64" src={props.image} alt={props.image}/>
    <p className=" font-medium text-xl text-wrap">{props.name}</p>
    <p>Ratings {props.ratings} </p>
    <div className=" flex gap-3">
    <p className=" line-through">{props.actual_price} </p>
    <p>{props.discount_price} </p></div>
    <button className="py-2 px-12 bg-red-800 text-white">Add to Cart</button>
    <button className="p-3 border-2  rounded-xl bg-gray-500 text-white absolute top-2 right-10">Sale</button>
    </div>
  )
}

export default ProductCard