// react
import React, { useState, useEffect } from 'react';

// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// components
import ShadowBox from '../../../public-components/structure/ShadowBox';

// data
import timeline from './record-feeds-data';

// backend
//import {policyMsg} from '../../../../backend/policyMsg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

//export default function RecordFeeds(order)
export default function RecordFeeds() {
  /** define **/
  // const [currentPage, setCurrentPage] = useState(1);
  // const [timeline, setTimeline] = useState([]);

  // const itemsPerPage = 10;
  // const totalPages = Math.ceil(timeline.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedEvents = timeline.slice(startIndex, endIndex);

  // const policyno = sessionStorage.getItem('product_policyno') || '';

  /** function **/
  // useEffect(() => {
  //   const fetchData = async () => {
  //       const data = await policyMsg(policyno,order.order);
  //       setTimeline(data);
  //   };

  //   fetchData();
  //   }, [order]); 


  // function handleLeftClick() {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function handleRightClick() {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }


  return (
    <>
      <ShadowBox>
        <div className="flow-root p-8 sm:p-12">
          <ul role="list" className="-mb-8">
            {/* {displayedEvents.map((event, eventIdx) => (
              <li key={eventIdx}>
                <div className="relative pb-10">
                  {eventIdx !== displayedEvents.length - 1 ? (
                    <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
                  ) : null}
                  <div className="relative flex space-x-3 sm:space-x-5 pt-1.5">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                        )}
                      >
                        <event.icon aria-hidden="true" className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="flex flex-col items-start sm:grid sm:grid-cols-4 min-w-0 flex-1 justify-between">
                      <div className='text-gray-700 sm:col-span-3'>
                        <p className='font-semibold'>{event.category}</p>
                        <p className="text-base">{event.content}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-base text-gray-700 font-thin sm:font-normal sm:col-span-1">
                        <time dateTime={event.datetime}>{event.datetime}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))} */}
            {timeline.map((event, eventIdx) => (
              <li key={eventIdx}>
                <div className="relative pb-10">
                  <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
                  <div className="relative flex space-x-3 sm:space-x-5 pt-1.5">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                        )}
                      >
                        <event.icon aria-hidden="true" className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="flex flex-col items-start sm:grid sm:grid-cols-4 min-w-0 flex-1 justify-between">
                      <div className='text-gray-700 sm:col-span-3'>
                        <p className='font-semibold'>{event.category}</p>
                        <p className="text-base">{event.content}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-base text-gray-700 font-thin sm:font-normal sm:col-span-1">
                        <time dateTime={event.datetime}>{event.datetime}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ShadowBox>

      {/* <div className="flex justify-end space-x-4 p-4 text-right">
        <p>
          第{startIndex + 1}至{endIndex > timeline.length ? timeline.length : endIndex}條，共{timeline.length}條
        </p>
        <div className="flex gap-3">
          <ChevronLeftIcon
            className={`h-5 w-5 cursor-pointer ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700'}`}
            onClick={handleLeftClick}
          />
          <ChevronRightIcon
            className={`h-5 w-5 cursor-pointer ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-700'}`}
            onClick={handleRightClick}
          />
        </div>
      </div> */}
    <div className="flex justify-end space-x-4 p-4 text-right">
        <p>
          第1至10條，共20條
        </p>
        <div className="flex gap-3">
          <ChevronLeftIcon
            className={`h-5 w-5 cursor-pointer`}
          />
          <ChevronRightIcon
            className={`h-5 w-5 cursor-pointer`}
          />
        </div>
      </div>

    </>
  );
}