import koreanImg from '../assets/images/menu_korean.png';
import thaiImg from '../assets/images/menu_thai.png';
import mexicanImg from '../assets/images/menu_mexican.png';
import commonImg from '../assets/images/menu_common.png';

export type Language = 'en' | 'ko';

export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  isKeynote?: boolean;
  tag?: string;
  badge?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: string[];
}

export interface ContentData {
  header: {
    vipAccess: string;
    dayPrefix: string;
  };
  hero: {
    milestoneBadge: string;
    titleTop: string;
    titleBottom: string;
    keyMessage: string;
    slogan: string;
    eventMeta: string;
    badgeText: string;
  };
  schedule: {
    sectionTitle: string;
    sessionCount: string;
    liveSync: string;
    items: ScheduleItem[];
  };
  menu: {
    sectionTitle: string;
    subtitle: string;
    swipeHint: string;
    chefChoice: string;
    optionLabel: string;
    categories: MenuItem[];
    common: {
      title: string;
      subtitle: string;
      image: string;
      items: string[];
    };
  };
  footer: {
    line: string;
    copyright: string;
  };
}

export const content: Record<Language, ContentData> = {
  en: {
    header: {
      vipAccess: 'VIP ACCESS',
      dayPrefix: 'D-',
    },
    hero: {
      milestoneBadge: 'MILESTONE CELEBRATION',
      titleTop: '10 MILLION',
      titleBottom: 'PRODUCTION CEREMONY',
      keyMessage: 'A New Milestone in Laundry Innovation',
      slogan: 'Together We Build A Better Tomorrow',
      eventMeta: 'Friday, Nov 13, 2026 · 12:00 PM CST · Clarksville, Tennessee',
      badgeText: 'EXCLUSIVE VIP DIGITAL INVITATION',
    },
    schedule: {
      sectionTitle: 'SCHEDULE',
      sessionCount: '5 Sessions',
      liveSync: 'LIVE SYNC',
      items: [
        {
          id: 1,
          time: '12:20 – 12:50',
          title: 'Welcome & Lunch',
          subtitle: 'Casual networking',
          location: 'Cafeteria / Dining Hall',
        },
        {
          id: 2,
          time: '12:50 – 13:05',
          title: 'Opening & History',
          subtitle: 'Kickoff showcase & Clarksville site history',
          location: 'Main Stage',
        },
        {
          id: 3,
          time: '13:05 – 13:25',
          title: '10 Millionth Unit Reveal',
          subtitle: 'Grand unveiling & VIP Keynote Speeches',
          location: 'Main Stage',
          isKeynote: true,
          tag: 'KEYNOTE · REVEAL',
          badge: 'SPECIAL MILLIONTH UNIT REVEAL',
        },
        {
          id: 4,
          time: '13:25 – 14:05',
          title: 'Celebration & Awards',
          subtitle: 'Signing, Cake-Cutting, Contributor Recognition & Commemorative Photo',
          location: 'Main Stage',
        },
        {
          id: 5,
          time: '14:05 – 15:10',
          title: 'Closing & Send-Off',
          subtitle: 'Final announcements & VIP Send-Off',
          location: 'Main Entrance',
        },
      ],
    },
    menu: {
      sectionTitle: 'SPECIAL VIP LUNCHEON',
      subtitle: 'Choose from three chef-crafted lunch boxes',
      swipeHint: 'Swipe to explore',
      chefChoice: 'CHEF CHOICE',
      optionLabel: 'Option',
      categories: [
        {
          id: 'korean',
          title: 'Korean',
          subtitle: 'Traditional flavors, modern elegance',
          image: koreanImg,
          items: [
            'Kimbap',
            'Dakgangjeong (Sweet & Crispy Fried Chicken Bites)',
            'Yubu Chobap (Tofu Pocket Rice)',
            'Gyeranmari (Rolled Omelet)',
            'Pickled Radish',
            'Fruit Cup',
          ],
        },
        {
          id: 'thai',
          title: 'Thai',
          subtitle: 'Aromatic and vibrant Southeast Asian flavors',
          image: thaiImg,
          items: [
            'Pineapple Chicken Fried Rice',
            'Wings',
            'Egg Roll',
            'Papaya Salad',
            'Fruit',
          ],
        },
        {
          id: 'mexican',
          title: 'Mexican',
          subtitle: 'Zesty, hearty and rich classic fiesta',
          image: mexicanImg,
          items: [
            'Burrito (Chicken or Veggie)',
            'Mexican Rice',
            'Black Beans',
            'Guacamole and Fruit Cup',
            'Chips and Salsa',
          ],
        },
      ],
      common: {
        title: 'Complimentary Treat',
        subtitle: 'Served with every lunch selection',
        image: commonImg,
        items: ['Sweet Red Bean Bread', 'Drink (Soda or Juice)'],
      },
    },
    footer: {
      line: 'LG Electronics, Clarksville, TN · Built for Excellence',
      copyright: '© 2026 LG Electronics. All rights reserved.',
    },
  },
  ko: {
    header: {
      vipAccess: 'VIP 초청',
      dayPrefix: 'D-',
    },
    hero: {
      milestoneBadge: '마일스톤 기념',
      titleTop: '1,000만 대',
      titleBottom: '생산 기념식',
      keyMessage: '세탁 혁신의 새로운 이정표',
      slogan: '함께 만드는 더 나은 내일',
      eventMeta: '2026년 11월 13일(금) · 오후 12:00 CST · 테네시 클락스빌',
      badgeText: 'VIP 전용 디지털 초청장',
    },
    schedule: {
      sectionTitle: '행사 일정',
      sessionCount: '5개 세션',
      liveSync: '실시간 연동',
      items: [
        {
          id: 1,
          time: '12:20 – 12:50',
          title: '환영 및 오찬',
          subtitle: '자유로운 네트워킹',
          location: '식당 / 다이닝 홀',
        },
        {
          id: 2,
          time: '12:50 – 13:05',
          title: '오프닝 및 히스토리',
          subtitle: '킥오프 쇼케이스 및 클락스빌 공장 역사',
          location: '메인 스테이지',
        },
        {
          id: 3,
          time: '13:05 – 13:25',
          title: '1,000만 번째 제품 공개',
          subtitle: '제품 언베일링 및 VIP 기조연설',
          location: '메인 스테이지',
          isKeynote: true,
          tag: '키노트 · 공개',
          badge: '특별 1,000만 번째 제품 공개',
        },
        {
          id: 4,
          time: '13:25 – 14:05',
          title: '축하 및 시상',
          subtitle: '서명식, 케이크 커팅, 유공자 포상 및 기념 촬영',
          location: '메인 스테이지',
        },
        {
          id: 5,
          time: '14:05 – 15:10',
          title: '폐회 및 환송',
          subtitle: '마무리 안내 및 VIP 환송',
          location: '정문 입구',
        },
      ],
    },
    menu: {
      sectionTitle: 'SPECIAL VIP LUNCHEON',
      subtitle: '셰프가 준비한 3가지 도시락 중 선택하세요',
      swipeHint: '옆으로 밀어서 확인',
      chefChoice: '셰프 추천',
      optionLabel: '옵션',
      categories: [
        {
          id: 'korean',
          title: '한식',
          subtitle: '전통의 맛과 현대적 우아함',
          image: koreanImg,
          items: [
            '김밥',
            '닭강정 (달콤바삭한 치킨 튀김)',
            '유부초밥',
            '계란말이',
            '단무지',
            '과일 컵',
          ],
        },
        {
          id: 'thai',
          title: '태국식',
          subtitle: '향긋하고 생동감 넘치는 동남아의 맛',
          image: thaiImg,
          items: [
            '파인애플 치킨 볶음밥',
            '치킨 윙',
            '에그롤',
            '파파야 샐러드',
            '과일',
          ],
        },
        {
          id: 'mexican',
          title: '멕시칸',
          subtitle: '풍성하고 진한 클래식 피에스타',
          image: mexicanImg,
          items: [
            '부리또 (치킨 또는 베지)',
            '멕시칸 라이스',
            '블랙빈',
            '과카몰리 & 과일 컵',
            '칩 & 살사',
          ],
        },
      ],
      common: {
        title: '공통 제공 간식',
        subtitle: '모든 도시락과 함께 제공됩니다',
        image: commonImg,
        items: ['달콤한 단팥빵', '음료 (탄산음료 또는 주스)'],
      },
    },
    footer: {
      line: 'LG Electronics, Clarksville, TN · Built for Excellence',
      copyright: '© 2026 LG Electronics. All rights reserved.',
    },
  },
};
