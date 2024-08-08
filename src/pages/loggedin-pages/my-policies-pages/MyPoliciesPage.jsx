// react
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// images
import sampleAvatar from "../../../assets/images/avatars/sample-avatar.png";

// icons
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

// components
import Header from "../../../components/homepage-components/header/Header";
import CSAvatar from "../../../components/loggedinpages-components/loggedin-public/cs-avatar/CSAvatar";
import ActiveFilter from "../../../components/loggedinpages-components/loggedin-public/filter/ActiveFilter";
import DashboardCard from "../../../components/loggedinpages-components/my-policies/my-policies-dashboard/DashboardCard";
import DashboardCardSkeleton from "../../../components/loggedinpages-components/my-policies/my-policies-dashboard/DashboardCardSkeleton";
import Section from "../../../components/public-components/structure/Section";

// filter data
const menuNames = ["全部狀態", "生效中/待生效", "已失效"];

// backend
import { myPoliciesData } from "../../../backend/myPoliciesData";

export default function MyPoliciesPage() {
  /** define **/
  const navigate = useNavigate();
  const location = useLocation();

  const params = location.state?.params || {};
  const custname =
    params.custname || sessionStorage.getItem("token_custname") || "";
  const hkid = params.hkid || sessionStorage.getItem("token_hkid") || "";

  const [policies, setPolitcies] = useState([]);
  const [filter, setFilter] = useState("全部狀態");

  /** function **/
  const filteredPolicies =
    filter === "全部狀態"
      ? policies
      : filter === "生效中/待生效"
      ? policies.filter(
          (policy) => policy.status === "生效中" || policy.status === "待生效"
        )
      : policies.filter((policy) => policy.status === filter);

  if (!sessionStorage.getItem("token_token")) {
    navigate("/");
  } else {
    sessionStorage.setItem("isLoggedIn", true);
  }

  const handleLogOut = () => {
    sessionStorage.clear();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await myPoliciesData(custname, hkid);
      setPolitcies(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <LoggedInHeader whichPageNow="myPolicies" /> */}
      <Header whichPageNow="myPolicies" isAccountPage={true} />

      <div className="w-full h-[16vh] bg-violet-700"></div>

      <div className="-mt-20  flex flex-col items-center">
        {/* <div>
                <h1 className="text-4xl font-extrabold">歡迎回來</h1>
            </div> */}
        <div className="mt-6">
          <img
            src={sampleAvatar}
            className="block w-full max-w-24 mx-auto rounded-full ring-8 ring-offset-2 ring-white/50"
          />
          <h1 className="text-2xl font-bold py-2 text-center">
            {custname}
            <br />
            歡迎回來！
          </h1>
        </div>
        <div className="mt-4 sm:hidden">
          <Link
            to="/"
            className="group flex items-center text-base font-bold"
            onClick={handleLogOut}
          >
            <ArrowRightStartOnRectangleIcon
              aria-hidden="true"
              className="mr-1 h-5 w-5"
            />
            登出
          </Link>
        </div>
      </div>

      <Section moreClassName="space-y-10 mb-40">
        <div className="my-10">
          <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
            <ActiveFilter
              currentFilter={filter}
              setFilter={setFilter}
              menuData={menuNames}
            />
            <p className="text-base text-gray-700">
              共有 {filteredPolicies.length} 份符合條件的保單
            </p>
          </div>

          <div>
            {policies.length === 0 ? <DashboardCardSkeleton /> : ""}

            {filteredPolicies.map((policy, index) => (
              <DashboardCard
                key={index}
                iconImg={policy.iconImg}
                state={policy.status}
                productName={policy.prodcodeChi}
                policyNumber={policy.policyno}
                effectiveDate={policy.startdate}
                policyDetailsLink={"/my-account/my-policies/policy-details"}
                almostExpiry={JSON.parse(policy.almostExpiry)}
                policyNo={policy.policyno}
                policyType={policy.productcode}
                custName={custname}
                hkid={hkid}
              />
            ))}
          </div>
        </div>
      </Section>

      <CSAvatar />
    </>
  );
}
