// icons
import {
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  GiftIcon,
  TrashIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const updateInsuredWarnings = [
  "更改受保人資料申請須在2024年5月16日（起保日期）前提交。",
  "請注意，有關更改事項在獲得我們回覆作實方才有效。",
]

const updateTravelDateWarnings = [
  "本保單一經購買，除了外遊警示外，不可取消及退款。",
  "如確認退保，你的保單將於2024年5月16日（起保日期）取消。",
  "退保申請須在2024-05-16（起保日期）前提交。",
]

const extendTravelDateWarnings = [
  "更改受保人資料申請須在2024年5月16日（起保日期）前提交。",
  "請注意，有關更改事項在獲得我們回覆作實方才有效。",
]

const updateBeneficiaryWarnings = [
  "本保單一經購買，除了外遊警示外，不可取消及退款。",
  "如確認退保，你的保單將於2024年5月16日（起保日期）取消。",
  "退保申請須在2024-05-16（起保日期）前提交。",
]

const cancelPolicyWarnings = [
  "本保單一經購買，除了外遊警示外，不可取消及退款。",
  "如確認退保，你的保單將於2024年5月16日（起保日期）取消。",
  "退保申請須在2024年5月16日（起保日期）前提交。",
]

const executionData = {
  "update-insured": {
    title:"更改受保人資料",
    warnings: updateInsuredWarnings,
    icon: UserIcon,
    id: "update-insured",
  },
  "update-travel-date": {
    title:"更改旅遊日期（未出發）",
    warnings: updateTravelDateWarnings,
    icon: ArrowsRightLeftIcon,
    id: "update-travel-date",
  },
  "extend-travel-date": {
    title:"延長旅遊日期（已出發）",
    warnings: extendTravelDateWarnings,
    icon: ArrowPathIcon,
    id: "extend-travel-date",
  },
  "update-beneficiary": {
    title:"更改受益人",
    warnings: updateBeneficiaryWarnings,
    icon: GiftIcon,
    id: "update-beneficiary",
  },
  "cancel-policy": {
    title:"取消保單",
    warnings: cancelPolicyWarnings,
    icon: TrashIcon,
    id: "cancel-policy",
  },
}

const leftBarData = [
  {
    title:"更改受保人資料",
    icon: UserIcon,
    id: "update-insured",
  },
  {
    title:"更改旅遊日期（未出發）",
    icon: ArrowsRightLeftIcon,
    id: "update-travel-date",
  },
  {
    title:"延長旅遊日期（已出發）",
    icon: ArrowPathIcon,
    id: "extend-travel-date",
  },
  {
    title:"更改受益人",
    icon: GiftIcon,
    id: "update-beneficiary",
  },
  {
    title:"取消保單",
    icon: TrashIcon,
    id: "cancel-policy",
  },
]

export { executionData, leftBarData }

