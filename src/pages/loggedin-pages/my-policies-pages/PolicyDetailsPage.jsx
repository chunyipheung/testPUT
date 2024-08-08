// react
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Header from "../../../components/homepage-components/header/Header";
import CSAvatar from "../../../components/loggedinpages-components/loggedin-public/cs-avatar/CSAvatar";
import TopBorder from "../../../components/loggedinpages-components/loggedin-public/decoration/TopBorder";
import BriefIntro from "../../../components/loggedinpages-components/my-policies/policy-details/BriefIntro";
import TabsMenu from "../../../components/loggedinpages-components/my-policies/policy-details/TabsMenu";
import Section from "../../../components/public-components/structure/Section";

// backend
import { getProductIcon } from "../../../backend/myPoliciesData";
import { policyDetailData } from "../../../backend/policyDetailData";

export default function PolicyDetailsPage() {
  //** define **/
  const location = useLocation();
  const navigate = useNavigate();

  const params = location.state?.params || {};
  const productName =
    params.productName || sessionStorage.getItem("product_productName") || "";
  const status =
    params.status || sessionStorage.getItem("product_status") || "";
  const hkid = params.hkid || "";
  const policytype =
    params.policytype || sessionStorage.getItem("product_policytype") || "";
  const policyno =
    params.policyno || sessionStorage.getItem("product_policyno") || "";
  const custname = params.custname || "";

  const [list, setList] = useState([]);
  const [IconImg, setIconImg] = useState(null);

  /** function **/
  useEffect(() => {
    const fetchData = async () => {
      const data = await policyDetailData(policytype, policyno);
      if (data.isExist) {
        setList(data);
      } else {
        navigate("/");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductIcon(policytype);
      setIconImg(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="pb-20 sm:pb-60">
        {/* <LoggedInHeader whichPageNow="myPolicies" /> */}
        <Header whichPageNow="myPolicies" isAccountPage={true} />
        <TopBorder />

        {IconImg !== null && (
          <Section moreClassName="pb-24">
            <BriefIntro
              policyName={productName}
              state={status}
              iconImg={IconImg}
              policyNo={policyno}
              custName={custname}
              hkid={hkid}
            />
            <TabsMenu data={list} />
          </Section>
        )}

        <CSAvatar />
      </div>
    </>
  );
}
