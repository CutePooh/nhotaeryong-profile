
import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone } from 'lucide-react';

const CoverLetterPage: React.FC = () => {
  return (
    <div className="p-6 md:p-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 md:mb-4">자기소개서</h2>
        <div className="w-10 md:w-12 h-1 bg-blue-800 mx-auto rounded-full"></div>
      </div>

      <article className="prose prose-stone prose-sm md:prose-lg max-w-none text-stone-700 leading-relaxed">
        <h3 className="text-lg md:text-xl font-bold text-stone-900 mt-8 md:mt-12 mb-4 md:mb-6 leading-snug">"금융 현장 경험으로 기업의 성장을 설계합니다"</h3>
        <p className="text-left break-keep">
          안녕하세요, 금융을 통해 기업의 지속 가능한 가치를 창출하는 전문가 {PROFILE.name}입니다. 
          저는 1989년부터 2025년까지 37년 동안 KB국민은행에서 근무하며, 대한민국 금융의 심장부에서 현장중심의 실무경험을 쌓아왔습니다. 
          영업점의 최전선에서부터 지역본부장과 본부 부서장에 이르기까지, 저는 수많은 기업의 성망을 지켜보며 금융이 기업의 생존과 성장에 얼마나 결정적인 역할을 하는지 체득했습니다.
        </p>

        <h3 className="text-lg md:text-xl font-bold text-stone-900 mt-8 md:mt-10 mb-4 md:mb-6 leading-snug">전략적 통찰과 실무적 해법의 조화</h3>
        <p className="text-left break-keep">
          본부 부서장과 지역본부장으로 재임하는 동안 저는 단순한 자금 공급을 넘어, 기업의 재무구조를 근본적으로 개선할 수 있는 전략적 파트너로서의 역할을 강조해왔습니다. 
          복잡한 거시경제 환경 속에서도 기업별 리스크를 정밀하게 진단하고, 이에 맞는 최적의 자산관리 및 자금조달 솔루션을 제시함으로써 고객사의 신뢰를 얻었습니다. 
          특히 현장의 목소리를 정책에 반영하여 프로세스를 혁신하고, 팀원들과 함께 구체적인 성과를 만들어내는 과정에서 리더십의 가치를 실현해왔습니다.
        </p>

        <h3 className="text-lg md:text-xl font-bold text-stone-900 mt-8 md:mt-10 mb-4 md:mb-6 leading-snug">내일의 가치를 위한 준비된 파트너</h3>
        <p className="text-left break-keep">
          현직에서의 긴 여정을 마무리하며, 이제 제가 가진 전문성과 노하우를 바탕으로 더 넓은 무대에서 기업의 성장을 돕고자 합니다. 
          변화하는 금융 트렌드에 대한 끊임없는 학습과 현장에서 다져진 통찰력을 결합하여, 귀사에 실질적인 비즈니스 임팩트를 줄 수 있는 전략적 조언자가 되겠습니다. 
          단순히 수치를 분석하는 것을 넘어, 사람과 현장을 이해하는 따뜻한 전문성으로 함께 가겠습니다.
        </p>

        <div className="mt-12 md:mt-20 border-t border-stone-200 pt-8 md:pt-12">
          <p className="text-stone-400 text-xs md:text-sm mb-6">오랜 시간 쌓아온 저의 경험을 검토해주셔서 감사합니다.</p>
          
          <div className="flex flex-col justify-between items-start gap-6">
            <div className="space-y-2">
              <p className="text-stone-800 font-bold text-base md:text-lg">{PROFILE.name} 드림</p>
              <div className="flex flex-col text-sm text-stone-500 gap-2 mt-2">
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-800 transition-colors cursor-pointer w-fit"
                >
                  <Mail size={14} className="text-blue-800" /> {PROFILE.email}
                </a>
                <a 
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-2 hover:text-blue-800 transition-colors cursor-pointer w-fit"
                >
                  <Phone size={14} className="text-blue-800" /> {PROFILE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CoverLetterPage;
