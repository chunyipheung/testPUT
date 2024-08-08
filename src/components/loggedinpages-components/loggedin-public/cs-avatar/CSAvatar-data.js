import { 
    PhoneIcon, 
    EnvelopeIcon, 
    ChatBubbleLeftEllipsisIcon, 
    MapPinIcon 
} from "@heroicons/react/24/solid";

const contactMethods = [
    { 
        methodName:"電話", 
        description:"查詢", 
        info:"28023138", 
        icon:PhoneIcon, 
        isLink:true,
        to:"tel:28023138", 
    },
    { 
        methodName:"電郵", 
        description:"查詢 | 遞交投保、續保和其他文件", 
        info:"service@unionfaith.com.hk", 
        icon:EnvelopeIcon, 
        isLink:true, 
        to:"mailto: service@unionfaith.com.hk",
    },
    { 
        methodName:"WhatsApp", 
        description:"遞交投保、續保和其他文件", 
        info:"51182945", 
        icon:ChatBubbleLeftEllipsisIcon, 
        isLink:true,
        to:"https://api.whatsapp.com/send?phone=51182945"
    },
    { 
        methodName:"地址", 
        description:"親臨/郵寄遞交文件", 
        info:"九龍荔枝角長沙灣道833號長沙灣廣場第一期7樓702-4室", 
        icon:MapPinIcon, 
        isLink:false, 
        to:"#"
    },
];

export default contactMethods;