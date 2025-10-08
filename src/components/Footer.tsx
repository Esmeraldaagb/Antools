import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <p className='text-sm md:text-lg font-medium my-3'>Copyright 2021. Antools</p>
            <p className="text-white/55 text-sm md:text-lg font-medium">
              Antool is a web collection of information on paid or free Design and Development tools
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-lg md:text-2xl">
              Contact Us
            </h4>
            <ul className="space-y-2 text-white/55 text-sm md:text-lg font-medium">
              <li>+621454859</li>
              <li>M Building, No.10 A</li>
              <li>antools@awesome.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-lg md:text-2xl">
              Categories
            </h4>
            <ul className="space-y-2 text-white/55 text-sm md:text-lg font-medium">
              <li><a href="#" className="hover:text-orange-500 transition">Design</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-lg md:text-2xl">
              Company Info
            </h4>
            <ul className="space-y-2 text-white/55 text-sm md:text-lg font-medium">
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Our Partners</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
            </ul>
          </div>
        </div>
    
      </div>
    </footer>
  );
}
