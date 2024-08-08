import SectionTitle from '../sectiontitle/SectionTitle'
import contactinfo from './contact-data'


export default function Contact() {
  return (
    <div className="bg-white pb-40 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle title="聯絡我們"/>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <b>辦公時間</b>
            <br />
            星期一至五：  上午9時至下午6時
            <br />
            星期六、星期日及公眾假期：  休息
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <b>公司地址（親臨或郵寄）</b>
            <br />
            九龍荔枝角長沙灣道833號長沙灣廣場第一期7樓702-4室
            <br />
            Room 702-4, 7/F., Tower 1, Cheung Sha Wan Plaza, 833 Cheung Sha Wan Rd., Lai Chi Kok, Kowloon
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {contactinfo.map((info) => (
              <div key={info.name} className="relative text-center">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-violet-700">
                    <info.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  {info.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{info.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
