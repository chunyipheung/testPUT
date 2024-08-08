import { CheckIcon, HandThumbUpIcon, BellAlertIcon } from '@heroicons/react/20/solid'

const timeline = [

    {
      category: "取消保單",
      content: '您已經成功取消保單，您將不再受到該保單的保障。',
      datetime: '2020-10-12',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    },
    {
      category: "取消保單",
      content: '您已經申請取消保單，我們會儘快通知您結果。',
      datetime: '2020-10-12',
      icon: CheckIcon,
      iconBackground: 'bg-emerald-400',
    },
    {
      category: "更改受保人資料",
      content: '您已經成功更改受保人資料。(僅保留最新紀錄)',
      datetime: '2020-10-10',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    },
    {
      category: "更改受保人資料",
      content: '您已經申請更改受保人資料，我們會儘快通知您結果。',
      datetime: '2020-10-10',
      icon: CheckIcon,
      iconBackground: 'bg-emerald-400',
    },
    {
      category: "更改旅遊日期",
      content: '您已經成功更改旅遊日期（未出發）。(僅保留最新紀錄)',
      datetime: '2020-10-10',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    },
    {
      category: "更改旅遊日期",
      content: '您已經申請更改旅遊日期（未出發），我們會儘快通知您結果。',
      datetime: '2020-10-10',
      icon: CheckIcon,
      iconBackground: 'bg-emerald-400',
    },
    {
      category: "延長旅遊日期",
      content: '您已經成功延長旅遊日期（已出發）。(僅保留最新紀錄)',
      datetime: '2020-10-10',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    },
    {
      category: "延長旅遊日期",
      content: '您已經申請延長旅遊日期（已出發），我們會儘快通知您結果。',
      datetime: '2020-10-10',
      icon: CheckIcon,
      iconBackground: 'bg-emerald-400',
    },
    {
      category: "續保",
      content: '您已經完成續保，新的保單將在2024年8月14日生效。',
      datetime: '2020-10-08',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    },
    {
      category: "續保",
      content: '教安心已為您發出續保通知書，請在2024年01月01日前完成續保，否則保單將過期，詳情請參閲續保通知書。',
      datetime: '2020-09-30',
      icon: BellAlertIcon,
      iconBackground: 'bg-amber-400',
    }, 
    {
      category: "投保",
      content: '您已經成功投保尊貴。旅遊保險，保單將在2024年1月1日生效。',
      datetime: '2020-09-20',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-violet-600',
    }, 
  ]


export default timeline;