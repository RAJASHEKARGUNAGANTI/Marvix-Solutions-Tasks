

const Navbar = () => {
    const navList = ["Home","Refrigerator","Tv’s"," Washing Machine", "Mobile Phones","Dryer","Phone Repair","All Category "]
  return (
    <div className="  px-52 bg-blue-800 p-2" >
        <ul className="list-none flex items-center justify-between">
        {navList.map((item,i) =>{
            return <li key={i} className=" text-white hover:underline font-normal "> {item}</li>
        })}
        </ul>
    </div>
  )
}

export default Navbar