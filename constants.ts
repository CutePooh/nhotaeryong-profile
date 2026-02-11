
import { Experience, Project, Skill, Certification } from './types';

export const PROFILE = {
  name: "노태룡",
  role: "금융 전문가 / 기업금융 컨설턴트",
  profileImage: "https://drive.google.com/thumbnail?id=1kp3qPx0_Vwar0Enprvy6g9wID3PcPdLu&sz=w1000",
  summary: "성장을 견인하는 전략적 파트너, 노태룡입니다. 37년간 KB국민은행에서 근무하며 현장중심의 실무경험을 쌓아온 금융전문가입니다. 지역본부장과 본부 부서장 등 주요 의사결정 보직을 거치며 기업금융 전반에 걸친 깊은 통찰력을 확보하였습니다. 복잡한 재무구조를 명확히 분석하여 기업의 지속가능한 성장전략과 최적의 자산관리 솔루션을 제시하는 데 주력하고 있습니다.",
  email: "h8915215@gmail.com",
  phone: "010-2011-2149",
  highlights: [
    "KB국민은행 37년 근무를 통한 기업금융 및 리스크 관리의 탁월한 전문성",
    "지역본부장 및 본부 부서장 역임을 통한 전략적 자산운용 및 의사결정 역량",
    "현장중심의 기업 재무분석을 통한 최적의 성장전략 및 자산관리 솔루션 제시",
    "다수의 중견/중소기업 대상 종합금융컨설팅 및 신용분석 성공사례 보유"
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "가좌공단지역본부",
    period: "2024 - 2025",
    role: "지역본부장",
    achievements: [
      "지역본부 총괄 경영관리를 통한 비즈니스 목표달성 추진",
      "중소 및 중견기업 대상 종합금융 솔루션 제공"
    ]
  },
  {
    company: "가치평가부",
    period: "2023 - 2024",
    role: "본부 부서장",
    achievements: [
      "KB국민은행 담보평가업무 총괄 부서장으로써 리스크 관리 및 전행 비용절감",
      "담보평가 업무수행 전문직원 채용 심사 및 전행 담보평가시스템 개발 추진",
      "담보평가 자체평가 확대로 외부평가에 따른 전사적 비용절감 달성"
    ]
  },
  {
    company: "서초중앙지점, 부산역지점",
    period: "2019 - 2022",
    role: "영업점장",
    achievements: [
      "영업점 총괄 경영 관리를 통한 KPI 달성으로 최우수 지역본부 선정 기여",
      "중소 및 중견기업 대상 종합금융 솔루션 및 기업컨설팅 제공"
    ]
  },
  {
    company: "기업금융부",
    period: "2005 - 2018",
    role: "영업지원 및 기획 팀장",
    achievements: [
      "중소/중견기업 지원 KB 히든스타 500 기업 프로젝트 수행",
      "기업금융컨설팅 및 소상공인지원 창업지원 컨설팅 업무 총괄 팀장",
      "중소기업 일자리 연결 프로젝트 KB굿잡 총괄 팀장",
      "교육부, 국방부, 한국무역협회 등 주요기관 업무협약 진행"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "중견기업 재무구조 개선 및 신용등급 상향 컨설팅",
    description: "대출 기업의 재무제표를 정밀 분석하여 저금리 대환대출 및 자본구조 최적화 전략을 실행했습니다.",
    thumbnail: "https://images.unsplash.com/photo-1454165833767-02654b562161?q=80&w=800&auto=format&fit=crop",
    techStack: ["재무분석", "리스크관리", "기업금융"],
    metrics: "컨설팅 후 이자비용 절감 및 재무개선 등에 따른 신용등급 상향 달성",
  },
  {
    id: "p2",
    title: "지역거점 우량기업 유치 및 자산관리 프로젝트",
    description: "관할 지역 내 유망 기업고객을 발굴하고 맞춤형 기업금융상품을 제안하여 자산규모를 확대했습니다.",
    thumbnail: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop",
    techStack: ["전략기획", "자산운용", "영업관리"],
    metrics: "전년 대비 신규 우량기업 여신규모 성장 견인",
  }
];

export const SKILLS: Skill[] = [
  { name: "기업금융 (Corporate Finance)", level: 98, category: "Frontend" as any },
  { name: "재무분석 및 컨설팅", level: 95, category: "Frontend" as any },
  { name: "리스크 관리 (Risk Management)", level: 95, category: "Backend" as any },
  { name: "전략적 의사결정 (Leadership)", level: 95, category: "Design" as any },
  { name: "자산관리 솔루션 (Wealth Management)", level: 90, category: "Tools" as any }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "외환관리사", issuer: "한국무역협회", date: "2009.05" },
  { name: "CFP(국제공인재무설계사)", issuer: "FPSB International", date: "2009.3" },
  { name: "기업금융,자산관리,외환 직무인증", issuer: "KB국민은행", date: "2010.12" },
  { name: "외완전문역, 파생상품투자상담사 등", issuer: "한국금융연수원 등", date: "2005.12" }
];
