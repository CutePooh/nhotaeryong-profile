
import React from 'react';
import { Mail, Star, Phone, Award } from 'lucide-react';
import { PROFILE, CERTIFICATIONS } from '../constants';

const Main: React.FC = () => {
  return (
    <div className="p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-12 md:mb-16">
        <div className="w-48 h-64 md:w-60 md:h-80 rounded-xl overflow-hidden bg-stone-200 paper-shadow border-4 border-white flex-shrink-0 relative shadow-lg">
          <img 
            src={PROFILE.profileImage} 
            alt={PROFILE.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.classList.add('flex', 'items-center', 'justify-center', 'text-center', 'p-4', 'bg-stone-100');
                parent.innerHTML = '<div class="flex flex-col gap-2"><span class="text-sm text-stone-500 font-bold">이미지를 불러올 수 없습니다</span><span class="text-xs text-stone-400 leading-tight">구글 드라이브 파일 권한이<br/>"링크가 있는 모든 사용자"인지<br/>확인해주세요.</span></div>';
              }
            }}
          />
        </div>
        <div className="flex-1 text-center md:text-left pt-2 md:pt-4">
          <h2 className="text-2xl md:text-5xl font-extrabold text-stone-800 mb-4 md:mb-6 leading-[1.2]">
            <span className="text-blue-800">{PROFILE.name}</span>입니다.<br/>
            <span className="text-lg md:text-3xl text-stone-500 font-bold block mt-1">성장을 견인하는 전략적 파트너</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 mb-8 md:mb-10 leading-relaxed max-w-3xl font-medium break-keep">
            {PROFILE.summary}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-blue-100 text-blue-900 rounded-full hover:bg-blue-200 transition-all font-bold shadow-sm hover:shadow-md"
            >
              <Mail size={16} className="md:w-[18px] md:h-[18px]" /> {PROFILE.email}
            </a>
            <a 
              href={`tel:${PROFILE.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-green-100 text-green-900 rounded-full font-bold shadow-sm hover:bg-green-200 transition-colors"
            >
              <Phone size={16} className="text-green-900 md:w-[18px] md:h-[18px]" /> {PROFILE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 전문 역량 및 주요 성과 */}
      <section className="bg-stone-50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-stone-100 shadow-sm relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#EBE9E4] rounded-bl-full -z-0 opacity-40"></div>
        <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative z-10">
          <Star className="text-blue-800 fill-blue-800 w-6 h-6 md:w-7 md:h-7" />
          전문 역량 및 주요 성과
        </h3>
        <ul className="grid gap-4 relative z-10">
          {PROFILE.highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3 items-start md:items-center">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-blue-800 border border-blue-100 text-xs md:text-sm font-bold flex items-center justify-center mt-0.5 md:mt-0 shadow-sm">
                {index + 1}
              </span>
              <p className="text-stone-700 leading-relaxed font-bold text-[15px] md:text-lg tracking-tight break-keep">
                {highlight}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 자격 및 인증 사항 */}
      <section className="p-1 md:p-2 relative">
        <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
          <Award className="text-blue-800 w-6 h-6 md:w-7 md:h-7" />
          자격 및 인증 사항
        </h3>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex flex-col justify-center p-4 md:p-5 bg-white border border-stone-200 rounded-xl h-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-stone-800 text-base md:text-lg mb-1 break-words leading-snug">
                {cert.name}
              </h4>
              <div className="flex flex-col gap-1 mt-auto">
                <span className="text-sm text-stone-500 font-medium break-words">{cert.issuer}</span>
                <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded w-fit">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Message */}
      <section className="mt-16 md:mt-20 text-center max-w-2xl mx-auto border-t border-stone-100 pt-10 md:pt-12 pb-4 md:pb-8">
        <p className="text-stone-400 italic text-xs md:text-sm mb-3 md:mb-4 tracking-widest uppercase font-bold">Expertise & Trust</p>
        <p className="text-stone-700 font-bold text-lg md:text-xl leading-relaxed px-4 break-keep">
          "37년의 현업 경험은 고객과의 신뢰를 쌓아온 시간입니다. <br className="hidden md:block" /> 
          가장 필요한 순간, 최적의 금융 해법을 제시하겠습니다."
        </p>
      </section>
    </div>
  );
};

export default Main;
