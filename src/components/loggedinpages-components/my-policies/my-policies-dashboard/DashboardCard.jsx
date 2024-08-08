// react
import { useNavigate } from "react-router-dom";

// mui
import { styled } from "@mui/material/styles";

// icons
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// components
import BlueSolidBadge from "../../../public-components/badges/BlueSolidBadge";
import GrayBadge from "../../../public-components/badges/GrayBadge";
import GreenSolidBadge from "../../../public-components/badges/GreenSolidBadge";
import RedBadge from "../../../public-components/badges/RedBadge";

export default function DashboardCard({
  iconImg,
  state,
  productName,
  policyNumber,
  effectiveDate,
  policyDetailsLink,
  almostExpiry = false,
  policyNo,
  policyType,
  custName,
  hkid,
}) {
  /** define **/
  const navigate = useNavigate();

  const IconImg = iconImg || null;

  const StyledIcon = styled(IconImg)(({ theme }) => ({
    fontSize: "40px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "56px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "80px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "96px",
    },
  }));

  /** function **/
  function handleOnClick() {
    const params = {
      productName: productName,
      custname: custName,
      hkid: hkid,
      policytype: policyType,
      policyno: policyNo,
      status: state,
    };
    //TabMenu session
    sessionStorage.setItem("product_productName", productName);
    sessionStorage.setItem("product_policytype", policyType);
    sessionStorage.setItem("product_policyno", policyNo);
    sessionStorage.setItem("product_status", state);
    navigate(policyDetailsLink, { state: { params } });
  }

  return (
    <div
      className="relative flex justify-center items-center
        space-x-3
        sm:space-x-6
        px-4 py-5 sm:px-6
        my-6 sm:my-11
        rounded-xl bg-white
        ring-1 ring-gray-900/5 hover:ring-0
        shadow-[0_3px_12px_4px] shadow-gray-300/20
        hover:shadow-[0_0_20px_4px] hover:shadow-gray-500/20
        "
    >
      {/* insurance image */}
      <div
        className={`
            mx-auto flex shrink-1
            h-14 w-20
            lg:h-40 lg:w-64
            md:h-28 md:w-48
            sm:h-20 sm:w-36
            items-center justify-center rounded-xl
            ${state === "已失效" ? "bg-gray-50" : "bg-amber-50"}`}
      >
        <StyledIcon
          className={`${
            state === "已失效" ? "text-gray-500" : "text-amber-500"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* insurance details */}
      <div className="flex min-w-0 gap-x-4 w-full xl:pl-4">
        <div className="min-w-0 flex-auto">
          <div>
            {state === "生效中" && <GreenSolidBadge>生效中</GreenSolidBadge>}
            {state === "待生效" && <BlueSolidBadge>待生效</BlueSolidBadge>}
            {state === "已失效" && <GrayBadge>已失效</GrayBadge>}
            <div
              className="
                pt-1
                lg:text-2xl
                md:text-xl
                text-lg
                font-bold sm:leading-8 leading-6 text-gray-900"
            >
              {productName}
            </div>
          </div>

          <div
            className="flex flex-col items-start
              sm:grid sm:grid-cols-2
              gap-x-10 md:gap-x-16 lg:gap-x-48 gap-y-0 pt-3 w-full"
          >
            <div className="mt-1 leading-6 text-gray-700">
              <div className="hidden md:block text-sm md:text-sm font-light">
                保單號碼
              </div>
              <div className="md:text-base text-sm md:font-bold font-normal">
                {policyNumber}
                <span className="md:hidden"> 保單</span>
              </div>
            </div>
            <div className="mt-1 leading-6 text-gray-700">
              <div className="hidden md:block text-sm md:text-sm font-light">
                生效日期
              </div>
              <div className="md:text-base text-sm md:font-bold font-normal">
                {effectiveDate}
                <span className="md:hidden"> 生效</span>
                {almostExpiry && (
                  <div className="pl-2 inline-block">
                    <RedBadge>儘快續保</RedBadge>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vertical divider */}
      <div className="border-l h-36 border-gray-200 hidden md:block"></div>

      {/* click-in button */}
      <div
        className="flex flex-col items-center md:w-1/4 hover:cursor-pointer"
        onClick={handleOnClick}
      >
        <div>
          <ArrowRightIcon
            aria-hidden="true"
            className="h-5 w-5 text-violet-700"
          />
        </div>
        <div className="hidden md:block">
          <p className="text-base lg:text-lg leading-6 text-violet-700 font-bold">
            保單詳情
          </p>
        </div>
      </div>
    </div>
  );
}
