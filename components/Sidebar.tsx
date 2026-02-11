
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FileText } from 'lucide-react';
import { PROFILE } from '../constants';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: '홈 / 요약', path: '/', icon: <Home size={18} /> },
    { name: '경력기술서', path: '/experience', icon: <Briefcase size={18} /> },
    { name: '자기소개서', path: '/cover-letter', icon: <FileText size={18} /> },
  ];

  return (
    <aside className="bg-[#FDFDFC] border-b md:border-b-0 md:border-r border-stone-200 p-4 md:p-6 flex flex-col md:sticky md:top-0 md:h-screen shadow-sm md:shadow-none">
      <div className="mb-4 md:mb-10 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 tracking-tight mb-1">{PROFILE.name}</h1>
        <p className="text-[11px] md:text-xs text-stone-500 font-bold uppercase tracking-wider">{PROFILE.role}</p>
      </div>

      <nav className="flex md:flex-col gap-2 md:gap-2 overflow-x-auto md:overflow-visible pb-1 md:pb-0 no-scrollbar items-center md:items-stretch">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl text-sm md:text-[15px] font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? 'bg-stone-100 text-blue-800 border border-stone-200 shadow-sm'
                  : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-stone-100 hidden md:block">
        <p className="text-[10px] text-stone-400 text-center">
          © {new Date().getFullYear()} {PROFILE.name}.<br/>All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
