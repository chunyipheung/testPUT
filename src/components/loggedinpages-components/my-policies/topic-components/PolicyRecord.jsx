// react
import React, { useState, useEffect } from 'react';

// icons
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

// components
import RecordFeeds from "../policy-record/RecordFeeds"
import SubTitle from "../../../public-components/structure/SubTitle"
import ActiveFilter from "../../../loggedinpages-components/loggedin-public/filter/ActiveFilter"

// data
const dateMenuData = ["從新至舊", "從舊至新"];
const categoryMenuData = [
    "全部種類", 
    "投保", 
    "續保", 
    "更改保單",
    "取消保單",
]

export default function PolicyRecord() {

    const isSkeleton = false;
    const [dateFilter, setDateFilter] = useState('從新至舊');
    const [categoryFilter, setCategoryFilter] = useState('全部種類');
    // const [order,setOrder] = useState(0);
    // useEffect(() => {
    //     if(filter === '從新至舊'){
    //         setOrder(0);
    //     }else{
    //         setOrder(1);
    //     }
    // }, [filter]); 

    return(
        <>

        <div className="space-y-12">
            <div>
                <div className="flex flex-wrap justify-between items-center sm:items-end">
                    <SubTitle isSkeleton={isSkeleton} IconImg={ClipboardDocumentCheckIcon} sectionName="我的保單紀錄" />
                    <div className="pb-2 sm:py-4 sm:p-4 flex items-center justify-end">
                        <ActiveFilter 
                            currentFilter={categoryFilter} 
                            setFilter={setCategoryFilter} 
                            menuData={categoryMenuData}
                            needLeft0={true}
                        /> 
                        <ActiveFilter 
                            currentFilter={dateFilter} 
                            setFilter={setDateFilter} 
                            menuData={dateMenuData}
                            needLeft0={false}
                        /> 
                    </div>
                </div>
                {/* <RecordFeeds order={order} /> */}
                <RecordFeeds/>
            </div>
            
        </div>
        </>
    );

}