import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-[#1E252B] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>

          <a
            href="#"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition"
          >
            <span>Categories</span>
            <ChevronDown size={16} />
          </a>

          <a href="#" className="text-gray-300 hover:text-white transition">My Collections</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition hidden md:block">
            Login
          </button>
          <button className="bg-[#FF6E30] hover:bg-orange-600 transition px-6 py-2 rounded-lg font-medium shadow-lg shadow-orange-500/30">
            Sign Up
          </button>

          <button
            className="text-gray-300 hover:text-white transition md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#283036] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          <a href="#" className="text-gray-300 hover:text-white transition text-lg">Home</a>

          <a
            href="#"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition text-lg"
          >
            <span>Categories</span>
            <ChevronDown size={16} />
          </a>

          <a href="#" className="text-gray-300 hover:text-white transition text-lg">My Collections</a>
          <a href="#" className="text-gray-300 hover:text-white transition text-lg">Blog</a>

          <button className="text-gray-300 hover:text-white transition text-lg">Login</button>
        </nav>
      </div>
    </header>
  );
}
