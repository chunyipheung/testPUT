import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// mui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

// css
import "./TabsMenu.css";

// components
import PolicyDetails from "../topic-components/PolicyDetails";
import PolicyDetailsSkeleton from "../topic-components/PolicyDetailsSkeleton";
import PolicyRecord from "../topic-components/PolicyRecord";
import PolicyRenew from "../topic-components/PolicyRenew";
import PolicyUpdate from "../topic-components/PolicyUpdate";

// list data
const tabs = [
  { name: "保單詳情", id: "policy-details" },
  { name: "保單紀錄", id: "policy-record" },
  { name: "保單更改", id: "policy-update" },
];

export default function TabsMenu(data) {
  /** define **/
  const hasData = data?.data?.roleList !== undefined;
  const { tab } = useParams(); // this one can get the path param :tab in App.jsx
  const navigate = useNavigate();

  const initialTabId = tab ?? "policy-details";
  const initialIndex = tabs.findIndex((tab) => tab.id === initialTabId);
  const [value, setValue] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [currentTopic, setCurrentTopic] = useState(tabs[value].name);

  /** function **/
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/my-account/my-policies/${tabs[newValue].id}`);
    setCurrentTopic(tabs[newValue].name);
  };

  // Update the tab when the URL changes
  useEffect(() => {
    const tabIndex = tabs.findIndex((t) => t.id === tab);
    if (tabIndex >= 0) {
      setValue(tabIndex);
      setCurrentTopic(tabs[tabIndex].name);
    }
  }, [tab]);

  return (
    <>
      <Box className="bg-transparent border-b border-gray-200">
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.name} className="!text-lg" />
          ))}
        </Tabs>
      </Box>

      <div className="mt-10 sm:mt-12">
        {currentTopic === "保單詳情" &&
          (!hasData ? (
            <PolicyDetailsSkeleton />
          ) : (
            <PolicyDetails policyData={data} />
          ))}
        {currentTopic === "續保" && <PolicyRenew />}
        {currentTopic === "保單紀錄" && <PolicyRecord />}
        {currentTopic === "保單更改" && <PolicyUpdate />}
      </div>
    </>
  );
}
