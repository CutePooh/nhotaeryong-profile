
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase, Award } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  return (
    <div className="p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">경력기술서 (Experience)</h2>
        <p className="text-sm md:text-base text-stone-500 break-keep">KB국민은행에서의 경험과 주요성과를 시간 순으로 정리했습니다.</p>
      </div>

      <div className="relative border-l-2 border-stone-200 ml-2 md:ml-4 space-y-10 md:space-y-12 pb-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] md:-left-[11px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-4 border-blue-800"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-stone-800 break-keep">{exp.company}</h3>
              <span className="hidden md:block text-stone-300">|</span>
              <div className="flex items-center gap-1.5 text-stone-500 text-sm font-medium">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <div className="mb-3 md:mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <Briefcase size={12} />
              {exp.role}
            </div>

            <ul className="space-y-2 md:space-y-3">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex gap-2 text-stone-600 leading-relaxed text-sm md:text-base">
                  <span className="text-blue-600 mt-1 min-w-[10px]">•</span>
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <div className="mt-6 md:mt-8 pt-8 md:pt-10 border-t border-stone-100">
        <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-4 md:mb-6 flex items-center gap-2">
           <Award size={20} className="text-blue-800 md:w-6 md:h-6" />
           주요 수상 (Honors & Awards)
        </h3>
        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-stone-50 text-blue-800 rounded-full flex items-center justify-center shadow-inner">
              <span className="font-bold text-xs md:text-sm">2019</span>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-base md:text-lg leading-tight">교육부 부총리 표창</h4>
              <p className="text-xs md:text-sm text-stone-500 mt-1 font-medium">교육부</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-stone-50 text-blue-800 rounded-full flex items-center justify-center shadow-inner">
              <span className="font-bold text-xs md:text-sm">2016</span>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-base md:text-lg leading-tight">산업통상자원부 장관 표창</h4>
              <p className="text-xs md:text-sm text-stone-500 mt-1 font-medium">산업통상자원부</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
