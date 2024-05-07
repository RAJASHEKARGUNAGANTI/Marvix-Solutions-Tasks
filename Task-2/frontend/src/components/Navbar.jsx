import { useState } from 'react';

const Navbar = () => {
  const navList = ["Home","Refrigerator","Tv’s","Washing Machine", "Mobile Phones","Dryer","Phone Repair","All Category"];
  const [showNav, setShowNav] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="px-32 py-2 bg-blue-800 flex items-center justify-center">

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setShowNav(!showNav)} className="text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <div className={`md:flex ${showNav ? 'flex' : 'hidden'}`}>
        <ul className="list-none md:flex items-center space-x-16">
          {navList.map((item, i) => (
            <li key={i}>
              <a href="#" className="text-white hover:underline font-normal">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
