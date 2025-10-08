import { Heart, FolderPlus } from "lucide-react";

interface ToolCardProps {
  name: string;
  type: string;
  image: string;
  description: string;
}

export default function ToolCard({
  name,
  type,
  image,
  description,
}: ToolCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden group
        rounded-2xl p-6
        border border-gray-800/50
        transition-all duration-500 ease-out
        hover:scale-[1.03] hover:shadow-lg hover:boder hover:border-white/20
      `}
    >
      <div
        className="
          absolute inset-0 
          bg-gradient-to-tr from-[#283036]/60 via-[#283036]/70 to-orange-500/20
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-in-out
          rounded-2xl
        "
      ></div>

      <div className="relative z-10 flex flex-col justify-between h-full">

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={image}
                alt={name}
                className="w-14 h-14 object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="font-bold text-md md:text-xl text-white">{name}</h3>
              <p className="text-gray-400 text-sm md:text-md">{type}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-md md:text-lg max-w-sm mb-6">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <button className="flex items-center gap-1 hover:text-red-500 transition">
              <Heart className="text-white/38 fill-white/38" size={25} />
            </button>

            <button className="flex items-center gap-1 hover:text-orange-500 transition">
              <FolderPlus className="text-white/38 " size={25} />
            </button>
          </div>

          <button
            className="
              px-4 py-3 rounded-lg text-md md:text-lg font-medium transition-all duration-300 w-[80px] md:w-[100px]
              bg-transparent border border-transparent text-white/55
              group-hover:bg-gradient-to-r group-hover:from-[#FF6E30] group-hover:to-orange-600
              group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FF6E30]/30
            "
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
