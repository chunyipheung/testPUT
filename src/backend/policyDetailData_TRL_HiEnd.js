import { getAPI } from "./api";

export const policyDetailData_TRL_HiEnd = async (source,policyno) => {
    const token = sessionStorage.getItem('token_token');
    const custname = sessionStorage.getItem('token_custname');
    const hkid = sessionStorage.getItem('token_hkid');
    const list = [];
    list["roleList"] = [];
    list["download"] = [];
    list["overview"] = [];
    list["PolicyholderInsuredInfo1"] = [];
    list["InsuredInfo2"] = [];
    list["InsuredInfo3"] = [];
    list["InsuredInfo4"] = [];
    list["insured1beneficiaries"] = [];
    list["insured2beneficiaries"] = [];
    list["insured3beneficiaries"] = [];
    list["insured4beneficiaries"] = [];
    list["beneficiaryRoleList"] = [];
    list["insuredName"] = []; // aims for beneficiary 

    var url = `http://61.244.92.135/php/product_travel.php?&api_type=travel_detail_${source}&policyno=${policyno}&token=${token}&custname=${custname}&hkid=${hkid}`;
    //console.log(url);
    var res = await getAPI(url);

    if(!res.failed){
        list["isExist"] = true;

        let num = 0;
        for (const data of res) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    list["overview"][num] = {itemName:key, itemDetail:data[key]};
                    num = num + 1;
                }
            }
        }
        //get paymentcode
        url = `http://61.244.92.135/php/product_travel.php?&api_type=paymentcode&policyno=${policyno}&token=${token}&custname=${custname}&hkid=${hkid}`;
        res = await getAPI(url);
        if(!res.failed){
            try{
                list["download"] = [
                    {
                        fileName:"保單",
                        fileLink:"http://61.244.92.135/onlinePDF/Schedule_" + res[0].paymentcode + ".pdf",
                    },
                    {
                        fileName:"發票及收據",
                        fileLink:"http://61.244.92.135/onlinePDF/Receipt_" + res[0].paymentcode + ".pdf",
                    },
                    {
                        fileName:"🎁 禮品換領券",
                        fileLink:"http://61.244.92.135/onlinePDF/Coupon_" + res[0].paymentcode + ".pdf",
                    },
                    {
                        fileName:"索償指南",
                        fileLink:"http://61.244.92.135/onlinePDF/Travel_Claim_" + res[0].paymentcode + ".pdf",
                    },
                    {
                        fileName:"保單條款",
                        fileLink:"https://www.unionfaith.com.hk/DL/CMI_TRLPolicy_EDU_2019.pdf",
                    },
                    {
                        fileName:"COVID-19保障條款",
                        fileLink:"https://www.unionfaith.com.hk/dl/TRL_COVID-19_EDU.pdf",
                    },
                ]
            }catch(error){}
        }
        list["overview"][num] = {itemName:"文件下載",itemDetail:list["download"]};

        url = `http://61.244.92.135/php/product_travel.php?&api_type=travel_insured_${source}&policyno=${policyno}&token=${token}&custname=${custname}&hkid=${hkid}`;
        res = await getAPI(url);
        if(!res.failed){
            
            let row = 0;
            for (const data of res) {
                if(data.ranking === 1){
                    for(const key in data){
                        if (data.hasOwnProperty(key) && key !== "ranking") {
                            list["PolicyholderInsuredInfo1"][row] = {itemName:key, itemDetail:data[key]};
                            row += 1;
                        }
                    }
                }else if(data.ranking === 2){
                    row = 0;
                    for(const key in data){
                        if (data.hasOwnProperty(key) && key !== "ranking") {
                            list["InsuredInfo2"][row] = {itemName:key, itemDetail:data[key]};
                            row += 1;
                        }
                    }
                }else if(data.ranking === 3){
                    row = 0;
                    for(const key in data){
                        if (data.hasOwnProperty(key) && key !== "ranking") {
                            list["InsuredInfo3"][row] = {itemName:key, itemDetail:data[key]};
                            row += 1;
                        }
                    }
                }else if(data.ranking === 4){
                    row = 0;
                    for(const key in data){
                        if (data.hasOwnProperty(key) && key !== "ranking") {
                            list["InsuredInfo4"][row] = {itemName:key, itemDetail:data[key]};
                            row += 1;
                        }
                    }
                }
            }

            list["roleList"] = [
                {
                    roleName:"保單申請人及受保人1",
                    dataListArray:list["PolicyholderInsuredInfo1"],
                    isPolicyHolder:true,
                },
                {
                    roleName:"受保人2",
                    dataListArray:list["InsuredInfo2"],
                },
                {
                    roleName:"受保人3",
                    dataListArray:list["InsuredInfo3"],
                },
                {
                    roleName:"受保人4",
                    dataListArray:list["InsuredInfo4"],
                },
            ]
        }

        url = `http://61.244.92.135/php/product_travel.php?&api_type=travel_beneficiary_${source}&policyno=${policyno}&token=${token}&custname=${custname}&hkid=${hkid}`;
        res = await getAPI(url);
        if(!res.failed){
            var insuredNum = 1;
            for (const data of res) {
                insuredNum = data.insuredNum;

                let beneficiary = {};
                for(const key in data){
                    if (data.hasOwnProperty(key) && key !== "insuredName" && key !== "insuredNum"){
                        beneficiary[key] = data[key];
                    }
                }
                list[`insured${insuredNum}beneficiaries`].push(beneficiary);

                list["beneficiaryRoleList"][insuredNum-1] = {insuredOrder:insuredNum.toString(),insuredName:data.insuredName,isPolicyHolder:true,beneficiaryList:list[`insured${insuredNum}beneficiaries`]};
            }
        }
    }
    return list;
}