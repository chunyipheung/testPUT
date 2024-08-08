// 旅遊保
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
// 尊貴旅遊保
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
// 車保
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
// 家居財物
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
// 家居裝修
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
// 家傭
import Face4OutlinedIcon from '@mui/icons-material/Face4Outlined';
// 火險
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
// 海外留學
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// 醫療
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
// 個人意外
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
// 教師/中醫專業責任
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
// 人壽/儲蓄
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
// 危疾
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
// 學校
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
// 本地活動
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
// 海外活動
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
// 網絡數據安全
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
// 賣旗
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
// 義工
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
// 教會
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
// NGO
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
// 業主立案法團
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';

import { getAPI } from "./api";

export const myPoliciesData = async (custname,hkid) => {
    const token = sessionStorage.getItem('token_token');
    const allPolices = [];
    const url = `http://61.244.92.135/php/product.php?&custname=${custname}&hkid=${hkid}&token=${token}&type=allProduct`;
    const res = await getAPI(url);

    const extractPolicies = (policy) => {
        let icon = null;
        let productCode = "";
        try{ productCode = policy.productcode.toUpperCase(); }catch(error){}
    
        icon = getProductIcon(productCode);

        return {
            ...policy,
            iconImg: icon, 
        };
    };

    if (res && Array.isArray(res)) {
        for (const policy of res) {
            allPolices.push(extractPolicies(policy));
        }
    } else if (res && typeof res === 'object') {
        allPolices.push(extractPolicies(res));
    }
    
    return allPolices;
}



export const getProductIcon = (productCode) =>{
    let icon = null;
    try{ productCode = productCode.toUpperCase(); }catch(error){}
    switch (productCode) {
        case "MOTOR-C":
        case "MOTOR-T":
            icon = DirectionsCarFilledOutlinedIcon;
            break;
        case "TRL-HIEND":
            icon = AirplaneTicketOutlinedIcon;
            break;
        case "TRL":
            icon = FlightTakeoffOutlinedIcon;
            break;
        case "HOME":
            icon = GiteOutlinedIcon;
            break;
        case "HREV":
            icon = BuildOutlinedIcon;
            break;
        case "FIRE":
            icon = LocalFireDepartmentOutlinedIcon;
            break;
        case "DHI":
            icon = Face4OutlinedIcon;
            break;
        case "OSTUDY":
            icon = SchoolOutlinedIcon;
            break;
        case "MEDICAL":
            icon = SickOutlinedIcon;
            break;
        case "PA":
            icon = HealingOutlinedIcon;
            break;
        case "EDUPI":
            icon = BadgeOutlinedIcon;
            break;
        case "TERMLIFE":
            icon = PaidOutlinedIcon;
            break;
        case "SC":
            icon = CorporateFareOutlinedIcon;
            break;
        case "GTRAVEL":
            icon = DownhillSkiingOutlinedIcon;
            break;
        case "CHURCH":
            icon = ChurchOutlinedIcon;
            break;
        case "CANCERFEE":
        case "CANCERPLA":
            icon = CardGiftcardOutlinedIcon;
            break;
        default:
            icon = DirectionsCarFilledOutlinedIcon;
            break;
    }
    return icon;
}