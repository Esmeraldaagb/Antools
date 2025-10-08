import { Facebook, Instagram, Twitter,ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className=" relative z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
            <button className="text-gray-300 hover:text-white transition hidden md:block">Login</button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition px-6 py-2 rounded-lg font-medium shadow-lg shadow-orange-500/30">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
