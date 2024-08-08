// icons
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';

const PolicyDetailsData = {
  supremeTravel:
  {
    policyName: "尊貴。旅遊保險",
    state: "生效中",
    iconImg: FlightTakeoffOutlinedIcon,
    policyNumber: "T123456789101112",
    effectiveDate: "2024-02-17",
    paymentAmount: "$500",
    issueDate: "2024-01-01",
  },
}

const OverviewData = {
  "保單申請人":"CHAN TAI MAN",
  "保單號碼":"TS123456789101112",
  "保障期限":"2024-02-10 → 2024-02-19",
  "購買日期":"2024-01-01",
  "支付金額":"HK$500",
    "文件下載":"",
};


const insured1 = {
  "姓名":"CHAN TAI MAN",
  "身份證/護照號碼":"A12****(7)",
  "出生日期":"1960-05-17",
  "與申請人關係":"自己",
  "電話號碼":"98765432",
  "通訊電郵":"無",
  };

const insured2 = {
  "姓名":"CHAN YAT MAN",
  "身份證/護照號碼":"A12****(7)",
  "出生日期":"1960-05-17",
  "與申請人關係":"自己",
  "電話號碼":"無",
  "通訊電郵":"abc@gmail.com",
  };

const insured3 = {
  "姓名":"CHAN YEE MAN",
  "身份證/護照號碼":"A12****(7)",
  "出生日期":"1960-05-17",
  "與申請人關係":"自己",
  "電話號碼":"98765432",
  "通訊電郵":"無",
  };

const insured4 = {
  "姓名":"CHAN SAM MAN",
  "身份證/護照號碼":"A12****(7)",
  "出生日期":"1960-05-17",
  "與申請人關係":"自己",
  "電話號碼":"98765432",
  "通訊電郵":"abc@gmail.com",
  };


const insuredList = [
{
  roleName:"保單申請人及受保人1",
  name:"CHAN TAI MAN",
  isPolicyHolder:true,
  id:"insured1",
  insuredObject: insured1,
},
{
  roleName:"受保人2",
  name:"CHAN YAT MAN",
  id:"insured2",
  insuredObject: insured2,
},
{
  roleName:"受保人3",
  name:"CHAN YEE MAN",
  id:"insured3",
  insuredObject: insured3,
},
{
  roleName:"受保人4",
  name:"CHAN SAM MAN",
  id:"insured4",
  insuredObject: insured4,
},
];

const insuredObjectList = {
  insured1:{
    roleName:"保單申請人及受保人1",
    name:"CHAN TAI MAN",
    isPolicyHolder:true,
    id:"insured1",
    insuredObject: insured1,
  },
  insured2:{
    roleName:"受保人2",
    name:"CHAN YAT MAN",
    id:"insured2",
    insuredObject: insured2,
  },
  insured3:{
    roleName:"受保人3",
    name:"CHAN YEE MAN",
    id:"insured3",
    insuredObject: insured3,
  },
  insured4:{
    roleName:"受保人4",
    name:"CHAN SAM MAN",
    id:"insured4",
    insuredObject: insured4,
  },
};

const insured1beneficiaries = [
{
  "姓名":"CHAN TAI MAN",
  "受益比例":"70%",
  "與申請人關係":"夫妻",
  "身份證/護照號碼":"A12****(7)",
  "電話號碼":"98765432",
  "通訊電郵":"無",
},
{
  "姓名":"CHAN TAI MAN",
  "受益比例":"30%",
  "與申請人關係":"兄弟",
  "身份證/護照號碼":"A12****(7)",
  "電話號碼":"無",
  "通訊電郵":"abc@gmail.com",
},
];

const insured2beneficiaries = [
{
  "姓名":"CHAN TAI MAN",
  "受益比例":"70%",
  "與申請人關係":"夫妻",
  "身份證/護照號碼":"A12****(7)",
  "電話號碼":"98765432",
  "通訊電郵":"無",
},
{
  "姓名":"CHAN TAI MAN",
  "受益比例":"30%",
  "與申請人關係":"兄弟",
  "身份證/護照號碼":"A12****(7)",
  "電話號碼":"無",
  "通訊電郵":"abc@gmail.com",
},
];

const beneficiaryList = [
{
  insuredOrder:"1",
  insuredName:"CHAN SIU MAN",
  isPolicyHolder:true,
  beneficiaryList:insured1beneficiaries,
},
{
  insuredOrder:"2",
  insuredName:"CHAN YEE MAN",
  beneficiaryList:insured2beneficiaries,
},
]

//console.log(OverviewData);
export default PolicyDetailsData;
export { OverviewData, beneficiaryList, insuredList, insuredObjectList };

