
const Off = () => {
  return (
    <div className='flex flex-wrap items-center justify-center bg-blue-800 px-40 my-6'>
    <div>
    <p className='flex flex-col'>
    <span className='text-5xl text-white'>Up to</span> 
    <span className='text-8xl font-semibold text-yellow-400'>40% off</span>
    <span className='text-3xl text-white '>Select products</span> 
    </p>
    <button className='px-8 py-4 bg-orange-500 rounded-xxl mt-3 text-white'>Shop now</button>
    </div>
    <div>
    <img className=' w-96 m-6 rounded-tl-xxl rounded-tr-xl rounded-br-xxl rounded-bl-xl' src='https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/All-appliances.jpeg' alt = "off Image"/>
    </div>
    </div>
  )
}

export default Off