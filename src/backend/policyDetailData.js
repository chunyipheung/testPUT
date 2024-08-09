import { policyDetailData_TRL_HiEnd } from "./policyDetailData_TRL_HiEnd";

export const policyDetailData = async (type,policyno) => {
    var list = [];
    var test244 = [];
    var test24a = [];
    if(type === "TRL-HiEnd"){
        var res = await policyDetailData_TRL_HiEnd("offline",policyno);
        if(res.overview.length == 6){
            list = res;
        }else{
            res = await policyDetailData_TRL_HiEnd("online",policyno);
            if(res.overview.length == 6){
                list = res;
            }
        }
    }

    return list;
}