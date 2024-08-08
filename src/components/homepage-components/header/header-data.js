import {
    SquaresPlusIcon,
    BuildingLibraryIcon,
    AcademicCapIcon,
    BuildingOffice2Icon,
    FlagIcon,
    GlobeAltIcon,
    HomeIcon,
    GiftIcon,
    CurrencyDollarIcon,
    HeartIcon,
    TruckIcon,
    UserGroupIcon,
  } from "@heroicons/react/24/outline";
  
const individualProducts = [
  {
    name: "旅遊保",
    icon: GlobeAltIcon,
    items: [
      {
        name: "尊貴 · 旅遊保險",
        href: "/individual/diginity-travel-insurance",
      },
      {
        name: "旅遊保險",
        href: "/individual/travel-insurance",
      },
      {
        name: "海外留學保險",
        href: "/individual/overseas-study-care-insurance",
      },
    ],
  },
  {
    name: "汽車保",
    icon: TruckIcon,
    items: [
      {
        name: "私家車保險",
        href: "/individual/motor-insurance",
      },
    ],
  },
  {
    name: "家居保",
    icon: HomeIcon,
    items: [
      {
        name: "家居責任 · 財物保險",
        href: "/individual/home-contents-insurance",
      },
      {
        name: "家居裝修責任保險",
        href: "/individual/home-renovation-insurance",
      },
      {
        name: "住宅樓宇火險",
        href: "/individual/domestic-building-fire-insurance",
      },
      {
        name: "家傭綜合保險",
        href: "/individual/domestic-helper-insurance",
      },
    ],
  },
  {
    name: "醫療保",
    icon: SquaresPlusIcon,
    items: [
      {
        name: "Bupa HERO 非凡自願醫保",
        href: "/individual/bupa-hero-vhis-plan",
      },
      {
        name: "醫療保險（全面版）",
        href: "/individual/the-choice-medical-insurance",
      },
      {
        name: "醫療保險（經濟版）",
        href: "/individual/caring-family-medical-insurance",
      },
      {
        name: "自願醫保",
        href: "/individual/vchoice-voluntary-health-insurance",
      },
      {
        name: "個人意外保險",
        href: "/individual/personal-accident-protection",
      },
    ],
  },
  {
    name: "人壽保",
    icon: CurrencyDollarIcon,
    items: [
      {
        name: "定期純人壽",
        href: "/individual/life-insurance",
      },
      {
        name: "千倍人壽儲蓄保",
        href: "/individual/pro-life-insurance",
      },
    ],
  },
  {
    name: "危疾保",
    icon: HeartIcon,
    items: [
      {
        name: "早期+嚴重純危疾保障",
        href: "/individual/early-critical-disease",
      },
      {
        name: "定期純危疾",
        href: "/individual/dread-disease-protection",
      },
    ],
  },
  {
    name: "專業保",
    icon: AcademicCapIcon,
    items: [
      {
        name: "教育工作者專業責任保險",
        href: "/individual/individual-educator",
      },
      {
        name: "中醫專業責任保險",
        href: "/individual/individual-chinese-medicine-practitioner",
      },
    ],
  },
];

const groupProducts = [
  {
    name: "活動保",
    icon: FlagIcon,
    items: [
      {
        name: "本地活動保險",
        href: "/group/local-activities-insurance",
      },
      {
        name: "海外活動保險",
        href: "/group/oversea-activities-insurance",
      },
      {
        name: "義工保險",
        href: "/group/volunteer-insurance",
      },
      {
        name: "賣旗三寶",
        href: "/group/group-flag-day-insurance",
      },
    ],
  },
  {
    name: "學校保",
    icon: BuildingLibraryIcon,
    items: [
      {
        name: "學校綜合保障",
        href: "/group/school-protection-insurance",
      },
      {
        name: "學校專業責任保險",
        href: "/group/association-liability-for-schools-insurance",
      },
      {
        name: "學校團體醫療保障",
        href: "/group/group-medical-insurance",
      },
      {
        name: "網絡及數據安全保險",
        href: "/group/school-cyber-data",
      },
    ],
  },
  {
    name: "NGO保",
    icon: GiftIcon,
    items: [
      {
        name: "NGO綜合保障",
        href: "/group/ngo-main-insurance",
      },
    ],
  },
  {
    name: "教會保",
    icon: UserGroupIcon,
    items: [
      {
        name: "教會綜合保障",
        href: "/group/church-main-insurance",
      },
    ],
  },
  {
    name: "其他機構",
    icon: BuildingOffice2Icon,
    items: [
      {
        name: "業主立案法團綜合保障",
        href: "/group/incoporated-owners-insurance",
      },
      {
        name: "診所綜合保障",
        href: "/group/clinic-main-insurance",
      },
    ],
  },
];

const productNavItems = [
  { navName: "個人產品", productData:individualProducts },
  { navName: "團體產品", productData:groupProducts },
];

const otherNavItems = [
  {name:"最新優惠", href:"/discount"},
  {name:"索償", href:"/claim"},
  {name:"幫助", href:"/help"},
];
  
  export { productNavItems, otherNavItems };
  