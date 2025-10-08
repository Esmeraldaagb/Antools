import ToolCard from './toolCard';

import figma from '../assets/tools/tool1.svg';
import sketch from '../assets/tools/tool2.svg';
import vscode from '../assets/tools/tool3.svg';
import notion from '../assets/tools/tool4.png';
import slack from '../assets/tools/tool5.svg';
import invision from '../assets/tools/tool6.svg';

const tools = [
  {
    name: 'Figma',
    type: 'Free',
    image: figma,
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
  },
  {
    name: 'Sketch',
    type: 'Trial & Paid',
    image: sketch,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   
  },
  {
    name: 'Visual Studio Code',
    type: 'Free',
    image: vscode,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  },
  {
    name: 'Notion',
    type: 'Free & Paid',
    image: notion,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Slack',
    type: 'Free & Paid',
    image: slack,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  },
  {
    name: 'Invision',
    type: 'Free & Paid',
    image: invision,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  }
];

export default function PopularTools() {
  return (
    <section className="container mx-auto px-4 py-16">
     
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white/90">
          Most Popular Tools
        </h2>
        <p className="text-white/55 font-semibold">
          Tools for the best Designers and Developers
          <br />
          most popularly used in the world
        </p>
      </div>

      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>

      
      <div className="text-center">
        <button className="text-orange-500 hover:text-orange-400 transition font-medium relative group border border-white/10 py-4 px-6 rounded-lg">
          Load more
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
        </button>
      </div>
    </section>
  );
}
