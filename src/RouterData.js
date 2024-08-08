// Individual Product Pages
import TravelPage from "./pages/individual-products/TravelPage";
import DignityTravelPage from "./pages/individual-products/DignityTravelPage";
import OverseasStudyCarePage from "./pages/individual-products/OverseasStudyCarePage";

import MotorPage from "./pages/individual-products/MotorPage";

import HomeContentsPage from "./pages/individual-products/HomeContentsPage";
import HomeRenovationPage from "./pages/individual-products/HomeRenovationPage";
import DomesticBuildingFirePage from "./pages/individual-products/DomesticBuildingFirePage";
import DomesticHelperPage from "./pages/individual-products/DomesticHelperPage";

import BupaHeroPage from "./pages/individual-products/BupaHeroPage";
import TheChoiceMedicalPage from "./pages/individual-products/TheChoiceMedicalPage";
import CaringFamilyMedicalPage from "./pages/individual-products/CaringFamilyMedicalPage";
import VchoiceVoluntaryHealthPage from "./pages/individual-products/VchoiceVoluntaryHealthPage";
import PersonalAccidentProtectionPage from "./pages/individual-products/PersonalAccidentProtectionPage";

import LifeInsurancePage from "./pages/individual-products/LifeInsurancePage";
import ProLifeInsurancePage from "./pages/individual-products/ProLifeInsurancePage";

import EarlyCriticalDiseasePage from "./pages/individual-products/EarlyCriticalDiseasePage";
import DreadDiseaseProtectionPage from "./pages/individual-products/DreadDiseaseProtection";

import IndividualEducatorPage from "./pages/individual-products/IndividualEducatorPage";
import IndividualChineseMedicinePractitionerPage from "./pages/individual-products/IndividualChineseMedicinePractitionerPage";

// Group Product Pages
import LocalActivitiesPage from "./pages/group-products/LocalActivitiesPage";
import OverseaActivitiesPage from "./pages/group-products/OverseaActivitiesPage";
import VolunteerPage from "./pages/group-products/VolunteerPage";
import GroupFlagDayPage from "./pages/group-products/GroupFlagDayPage";

import SchoolProtectionPage from "./pages/group-products/SchoolProtectionPage";
import AssociationLiabilityForSchoolsPage from "./pages/group-products/AssociationLiabilityForSchoolsPage";
import GroupMedicalPage from "./pages/group-products/GroupMedicalPage";
import SchoolCyberDataPage from "./pages/group-products/SchoolCyberDataPage";

import NgoMainPage from "./pages/group-products/NgoMainPage";

import ChurchMainPage from "./pages/group-products/ChurchMainPage";

import IncoporatedOwnersPage from "./pages/group-products/IncoporatedOwnersPage";
import ClinicMainPage from "./pages/group-products/ClinicMainPage";

const RouterData = [

// Individual Products
    {
        name: "旅遊保險",
        path:"/individual/diginity-travel-insurance",
        element: TravelPage,
    },
    {
        name: "尊貴 · 旅遊保險",
        path:"/individual/diginity-travel-insurance",
        element: DignityTravelPage,
    },
    {
        name: "海外留學保險",
        path:"/individual/overseas-study-care-insurance",
        element: OverseasStudyCarePage,
    },
    {
        name: "私家車保險",
        path:"/motor",
        element: MotorPage,
    },
    {
        name: "家居責任 · 財物保險",
        path:"/individual/home-contents-insurance",
        element: HomeContentsPage,
    },
    {
        name: "家居裝修責任保險",
        path:"/individual/home-renovation-insurance",
        element: HomeRenovationPage,
    },
    {
        name: "住宅樓宇火險",
        path:"/individual/domestic-building-fire-insurance",
        element: DomesticBuildingFirePage,
    },
    {
        name: "家傭綜合保險",
        path:"/individual/domestic-helper-insurance",
        element: DomesticHelperPage,
    },
    {
        name: "Bupa HERO 非凡自願醫保",
        path:"/individual/bupa-hero-vhis-plan",
        element: BupaHeroPage,
    },
    {
        name: "醫療保險（全面版）",
        path:"/individual/the-choice-medical-insurance",
        element: TheChoiceMedicalPage,
    },
    {
        name: "醫療保險（經濟版）",
        path:"/individual/caring-family-medical-insurance",
        element: CaringFamilyMedicalPage,
    },
    {
        name: "自願醫保",
        path:"/individual/vchoice-voluntary-health-insurance",
        element: VchoiceVoluntaryHealthPage,
    },
    {
        name: "個人意外保險",
        path:"/individual/personal-accident-protection",
        element: PersonalAccidentProtectionPage,
    },
    {
        name: "定期純人壽",
        path:"/individual/life-insurance",
        element: LifeInsurancePage,
    },
    {
        name: "千倍人壽儲蓄保",
        path:"/individual/pro-life-insurance",
        element: ProLifeInsurancePage,
    },
    {
        name: "早期+嚴重純危疾保障",
        path:"/individual/early-critical-disease",
        element: EarlyCriticalDiseasePage,
    },
    {
        name: "定期純危疾",
        path:"/individual/dread-disease-protection",
        element: DreadDiseaseProtectionPage,
    },
    {
        name: "教育工作者專業責任保險",
        path:"/individual/individual-educator",
        element: IndividualEducatorPage,
    },
    {
        name: "中醫專業責任保險",
        path:"/individual/individual-chinese-medicine-practitioner",
        element: IndividualChineseMedicinePractitionerPage,
    },

    // Group Products
    {
        name: "本地活動保險",
        path:"/group/local-activities-insurance",
        element: LocalActivitiesPage,
    },
    {
        name: "海外活動保險",
        path:"/group/oversea-activities-insurance",
        element: OverseaActivitiesPage,
    },
    {
        name: "義工保險",
        path:"/group/volunteer-insurance",
        element: VolunteerPage,
    },
    {
        name: "賣旗三寶",
        path:"/group/group-flag-day-insurance",
        element: GroupFlagDayPage,
    },
    {
        name: "學校綜合保障",
        path:"/group/school-protection-insurance",
        element: SchoolProtectionPage,
    },
    {
        name: "學校專業責任保險",
        path:"/group/association-liability-for-schools-insurance",
        element: AssociationLiabilityForSchoolsPage,
    },
    {
        name: "學校團體醫療保障",
        path:"/group/group-medical-insurance",
        element: GroupMedicalPage,
    },
    {
        name: "網絡及數據安全保險",
        path:"/group/school-cyber-data-insurance",
        element: SchoolCyberDataPage,
    },
    {
        name: "NGO綜合保障",
        path:"/group/ngo-main-insurance",
        element: NgoMainPage,
    },
    {
        name: "教會綜合保障",
        path:"/group/church-main-insurance",
        element: ChurchMainPage,
    },
    {
        name: "業主立案法團綜合保障",
        path:"/group/incoporated-owners-insurance",
        element: IncoporatedOwnersPage,
    },
    {
        name: "診所綜合保障",
        path:"/group/clinic-main-insurance",
        element: ClinicMainPage,
    },
];

export default RouterData;
  