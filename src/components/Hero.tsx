import { Facebook, Instagram, Search, Twitter } from 'lucide-react';
import hero from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
     
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"></div>

      <img
        src={hero}
        alt="Hero corner top"
        className="absolute top-0 left-0 w-40 opacity-70 md:hidden select-none pointer-events-none"
      />
      <img
        src={hero}
        alt="Hero corner bottom"
        className="absolute bottom-0 right-0 w-40 opacity-70 md:hidden select-none pointer-events-none"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
      
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Awesome tools for
            <br />
            Designer & Developer<span className="text-orange-500">.</span>
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Antools is a web collection of information on paid or
            <br className="hidden md:block" />
            free Design and Development tools
          </p>

          <div className="relative w-full sm:w-auto mb-12">
            <Search className="absolute left-5 top-1/3 text-white/38" size={16} />
            <input
              type="text"
              placeholder="find more than 430+ tools..."
              className="w-full bg-[#283036] border border-gray-700 rounded-2xl px-10 py-4 pr-24 text-gray-300 placeholder-white/38 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
            />
            <button
              className="absolute w-[170px] right-2 top-1/2 -translate-y-1/2 bg-[#FF6E30] hover:from-orange-600 hover:to-orange-700 transition px-5 py-2 font-semibold rounded-lg font-medium text-lg whitespace-nowrap shadow-lg shadow-orange-500/30"
            >
              Search
            </button>
          </div>


          <div className="flex gap-4">
            <a href="#"><Facebook size={25} className="text-white/80 hover:text-white transition" /></a>
            <a href="#"><Instagram size={25} className="text-white/80 hover:text-white transition" /></a>
            <a href="#"><Twitter size={25} className="text-white/80 hover:text-white transition" /></a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img src={hero} alt="Hero" className="w-full h-auto relative z-10" />
        </div>
      </div>
    </section>
  );
}
