// images
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import sampleAvatar from "../../../../assets/images/avatars/sample-avatar.png";

export default function BeneficiaryNameCard({
  insuredOrder,
  insuredName,
  beneficiaryList,
  isPolicyHolder = false,
}) {
  return (
    <>
      <div
        className="
      overflow-hidden bg-white
      rounded-xl
      ring-1 ring-gray-900/5
      shadow-[0_3px_12px_4px] shadow-gray-300/20
      px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt
          className="pt-6 px-4 sm:pt-0 text-gray-700
    flex items-center"
        >
          {isPolicyHolder ? (
            <img src={sampleAvatar} className="block w-full max-w-10 mr-2" />
          ) : (
            <UserCircleIcon className="h-9 w-9 mr-2 text-amber-400" />
          )}
          <div>
            <p className="text-base font-light">受保人{insuredOrder}</p>
            <p className="text-base font-semibold">{insuredName}</p>
          </div>
        </dt>
        <dd className="space-y-4 mt-4 text-md sm:text-base font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {beneficiaryList.map((beneficiary, index) => (
            <div key={index}>
              <div className="flex items-center pt-6 pb-4 px-4 sm:px-0 sm:-ml-1">
                <FaceSmileIcon className="h-7 w-7 mr-1 text-violet-700" />
                <p className="font-light sm:font-normal text-sm sm:text-base text-violet-700">
                  受益人{index + 1}
                </p>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2">
                {Object.entries(beneficiary).map(([key, value]) => (
                  <div key={key} className="px-4 py-6 sm:col-span-1 sm:px-0">
                    <dt className="text-sm font-extralight leading-1 text-gray-700">
                      {key}
                    </dt>
                    <dd className="mt-1 text-base leading-1 text-gray-700 sm:mt-2">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </dd>
      </div>
    </>
  );
}
