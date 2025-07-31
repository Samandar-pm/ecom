import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaHome, FaQuestionCircle } from "react-icons/fa";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import FAQ from "./pages/Faq";

export default function App() {
  return (
    <Router>
   <>
       <div className="flex justify-center w-full h-auto bg-black">
      <div className="flex justify-center items-center w-[80%] h-20">
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
            <Link to="/"><FaHome /></Link>
            </li>
            <li className="text-2xl cursor-pointer hover:text-yellow-300 transition">
            <Link to="/profile"><FaUser /></Link>
            </li>
            <li className="text-2xl cursor-pointer hover:text-yellow-300 transition">
            <Link to="/faq"><FaQuestionCircle /></Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
    <div></div>
   </>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
   </Router>
  );
}

