import { 
    ShieldCheckIcon as ShieldCheckOutlineIcon,
    ChatBubbleLeftRightIcon as ChatBubbleLeftRightOutlineIcon,
    HomeIcon as HomeOutlineIcon,
    CurrencyDollarIcon as CurrencyDollarOutlineIcon,
    UserIcon as UserOutlineIcon,
   } from "@heroicons/react/24/outline";

   import { 
    ShieldCheckIcon as ShieldCheckSolidIcon,
    ChatBubbleLeftRightIcon as ChatBubbleLeftRightSolidIcon,
    HomeIcon as HomeSolidIcon,
    CurrencyDollarIcon as CurrencyDollarSolidIcon,
    UserIcon as UserSolidIcon,
   } from "@heroicons/react/24/solid";

const LoggedInHeaderBottomLink = [
    {
        name: "保障",
        to: "/my-account/my-policies", 
        icon: ShieldCheckOutlineIcon,
        activeIcon: ShieldCheckSolidIcon,
        id: "myPolicies",
    },
    {
        name: "索償",
        to: "/my-account/claims", 
        icon: CurrencyDollarOutlineIcon,
        activeIcon: CurrencyDollarSolidIcon,
        id: "accountClaims",
    },
    {
        name: "幫助",
        to: "/my-account/help", 
        icon: ChatBubbleLeftRightOutlineIcon,
        activeIcon: ChatBubbleLeftRightSolidIcon,
        id: "accountHelp",
    },
    {
        name: "我的",
        to: "/my-account/my-info", 
        icon: UserOutlineIcon,
        activeIcon: UserSolidIcon,
        id: "myInfo",
    },
    {
        name: "主頁",
        to: "/", 
        icon: HomeOutlineIcon,
        activeIcon: HomeSolidIcon,
        id: "homepage",
    },
];

export default LoggedInHeaderBottomLink;