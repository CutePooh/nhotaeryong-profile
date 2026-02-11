
import React from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">기술 및 자격 (Skills & Certifications)</h2>
        <p className="text-slate-500">지속적인 학습을 통해 축적한 기술적 역량과 인증 사항입니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-2">{cat}</h3>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === cat).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                    <span className="text-xs text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Award className="text-blue-600" size={20} />
          자격 및 어학 (Certifications)
        </h3>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex flex-col justify-between p-4 bg-white border border-slate-200 rounded-lg h-full">
              <h4 className="font-bold text-slate-800 text-base mb-2 break-words leading-snug">
                {cert.name}
              </h4>
              <div className="flex flex-col gap-1">
                <span className="text-slate-500 text-sm font-medium break-words">{cert.issuer}</span>
                <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded w-fit">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
