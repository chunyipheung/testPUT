import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import Face4OutlinedIcon from '@mui/icons-material/Face4Outlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

const PoliciesData = [
    {
        iconImg:FlightTakeoffOutlinedIcon,
        state: "生效中",
        productName:"尊貴。旅遊保險",
        policyNumber:"TS123456789101112",
        effectiveDate:"2024-02-17",
        policyDetailsLink:"/my-account/policy-details",
    },
    {
        iconImg:DirectionsCarFilledOutlinedIcon,
        state: "已失效",
        productName:"私家車保險",
        policyNumber:"TS123456789101112",
        effectiveDate:"2024-02-17",
        policyDetailsLink:"/my-account/policy-details",
    },
    {
        iconImg:GiteOutlinedIcon,
        state: "生效中",
        productName:"家居責任。財物保險",
        policyNumber:"TS123456789101112",
        effectiveDate:"2024-02-17",
        policyDetailsLink:"/my-account/policy-details",
        almostExpiry:true,
    },
    {
        iconImg:Face4OutlinedIcon,
        state: "待生效",
        productName:"家傭綜合保險",
        policyNumber:"TS123456789101112",
        effectiveDate:"2024-02-17",
        policyDetailsLink:"/my-account/policy-details",
    },
    {
        iconImg:LocalFireDepartmentOutlinedIcon,
        state: "待生效",
        productName:"住宅樓宇火險",
        policyNumber:"TS123456789101112",
        effectiveDate:"2024-02-17",
        policyDetailsLink:"/my-account/policy-details",
    },
];

export default PoliciesData;