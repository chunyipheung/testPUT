import { getAPI } from "./api";

import { CheckIcon, HandThumbUpIcon, BellAlertIcon, StarIcon } from '@heroicons/react/20/solid'



export const policyMsg = async (policyno,order) => {
    var timelines = [];
    
    // var url = `http://61.244.92.135/php/product.php?token=${sessionStorage.getItem('token_token')}&custname=${sessionStorage.getItem('token_custname')}&hkid=${sessionStorage.getItem('token_hkid')}&policyno=${policyno}&type=policyMsg&order=${order}`;
    // var res = await getAPI(url);

    // if(res){
    //     const expression = (row) => {
    //         return {
    //             ...row,
    //             icon: getIcon(row.iconType), 
    //             iconBackground: getIconBG(row.iconType),
    //         };
    //     };

    //     if (res && Array.isArray(res)) {
    //         for (const row of res) {
    //             timelines.push(expression(row));
    //         }
    //     } else if (res && typeof res === 'object') {
    //         timelines.push(expression(res));
    //     }
    // }

    // Msg: 投保
    var url = `http://61.244.92.135/php/policyMsg.php?token=${sessionStorage.getItem('token_token')}&custname=${sessionStorage.getItem('token_custname')}&hkid=${sessionStorage.getItem('token_hkid')}&policyno=${policyno}&way=offline&type=getPolicyInsure`;
    console.log(url);
    var res = await getAPI(url);
    if(res){

    }
    return timelines;
}


export const getIcon = (number) =>{
    // 1: CheckIcon 2: HandThumbUpIcon 3: BellAlertIcon 4: StarIcon
    let icon = null;

    switch(number){
        case 1:
            icon = CheckIcon;
            break;
        case 2:
            icon = HandThumbUpIcon;
            break;
        case 3:
            icon = BellAlertIcon;
            break;
        case 4:
            icon = StarIcon;
            break;
    }

    return icon;
}

export const getIconBG = (number) =>{
    // 1: bg-emerald-400 2: bg-violet-700 3: bg-amber-400 4: 
    let bg = '';
    switch(number){
        case 1:
            bg = 'bg-emerald-400';
            break;
        case 2:
            bg = 'bg-violet-700';
            break;
        case 3:
            bg = 'bg-amber-400';
            break;
        case 4:
            bg = '';
            break;
    }

    return bg;
}