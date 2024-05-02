const NavTop = () => {
  return (
    <div className=" flex justify-between items-center px-10 pt-6 pb-12">
     
        <img src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/cropped-cropped-Logo-1-300x113.png" alt="image" className=" w-36 " />
      
      <div className="flex w-7/12 h-14">
        <input
          type="text"
          placeholder="Search your favourite product"
          className=" border-2 border-black w-full max-h-96 mr-3 rounded-30 px-4 "
        />
        <button className=" bg-red-800  "><svg class="h-8 w-8 text-white my-2 mx-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></button>
      </div>
      <div className="flex">
      <svg class="h-8 w-8 text-black hover:text-gray-500 mr-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
      <svg class="h-8 w-8 text-black hover:text-gray-500 "  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>

      </div>
    </div>
  );
};

export default NavTop;
