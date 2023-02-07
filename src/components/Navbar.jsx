import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    //Construção da logo
    <nav className="relative mx-2 p-6">
      <div className="flex items-center justify-between ml-10">
        <div className="pt-2">
          <img src={logo} alt="hoobank" className="w-32 h-8" />
        </div>

        <div className="flex max-sm:hidden space-x-6 text-white">
          <a href="#" className="hover:text-teal-500">Home</a>
          <a href="#" className="hover:text-teal-500">Features</a>
          <a href="#" className="hover:text-teal-500">Product</a>
          <a href="#" className="hover:text-teal-500">Clients</a>
        </div>

        <div className="hidden max-sm:flex justify-end w-8">
          <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl`}>
            <div className="flex text-white flex-col m-2">
              <a href="#" className="hover:text-teal-500">Home</a>
              <a href="#" className="hover:text-teal-500">Features</a>
              <a href="#" className="hover:text-teal-500">Product</a>
              <a href="#" className="hover:text-teal-500">Clients</a>
            </div>
          </div>

        </div>



      </div>
    </nav>
  )
}

export default Navbar;
