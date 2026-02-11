
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Target } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">프로젝트 상세 (Projects)</h2>
        <p className="text-slate-500">기획부터 배포까지, 직접 고민하고 구현한 결과물입니다.</p>
      </div>

      <div className="grid gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group grid md:grid-cols-2 gap-8 items-start border-b border-slate-100 pb-12 last:border-0">
            <div className="overflow-hidden rounded-xl bg-slate-100 paper-shadow">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-1">
                  <Target size={16} className="text-blue-500" />
                  Key Outcome
                </div>
                <p className="text-sm text-slate-600">{project.metrics}</p>
              </div>

              <div className="mt-auto flex gap-4">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    <Github size={16} /> Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
