import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function YellowAlert({ children }) {
  return (
    <div className="rounded-md bg-yellow-50 p-4 mb-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{children}</h3>
        </div>
      </div>
    </div>
  );
}
