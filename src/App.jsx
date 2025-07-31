import { FaShoppingCart, FaSearch, FaUser, FaHome, FaQuestionCircle } from "react-icons/fa";

export default function App() {
  return (
    <div className="flex justify-center w-full h-auto bg-red-500">
      <div className="flex justify-center items-center w-[80%] h-20 bg-blue-500">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center gap-40">
          <h1 className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer">
        <FaShoppingCart/>
        ECOM
      </h1>
            <div className="flex items-center bg-white text-black px-3 py-1 rounded-full w-64">
              <input type="text" placeholder="Search..." className="flex-grow outline-none text-sm placeholder:text-gray-400 bg-transparent"
              />
              <FaSearch className="text-gray-600 cursor-pointer" />
            </div>
          </div>
          <ul className="flex gap-x-20 text-white text-lg pr-4">
            <li className="text-2xl cursor-pointer hover:text-yellow-300 transition">
              <FaHome />
            </li>
            <li className="text-2xl cursor-pointer hover:text-yellow-300 transition">
              <FaUser />
            </li>
            <li className="text-2xl cursor-pointer hover:text-yellow-300 transition">
              <FaQuestionCircle />
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

