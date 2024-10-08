import SectionTitle from "../sectiontitle/SectionTitle"
import gifts from "./gifts-data"

export default function Gift() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="pb-3 text-base font-semibold leading-7 text-violet-700">送完即止</h2>
          <SectionTitle title="買就送" />
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {gifts.map((gift) => (
              <div key={gift.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-700">
                    <img src={gift.imageSrc} alt={gift.imageAlt} className="h-10 w-10" aria-hidden="true" />
                  </div>
                  {gift.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{gift.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
