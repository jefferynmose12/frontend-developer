import React from "react";
import { ImCross } from "react-icons/im";

const Modal = ({ closeModal, allDetails }) => {
  const { details, landings, missions, original_launch, status, type } =
    allDetails;

  const timestamp = original_launch;
  const dateObject = new Date(timestamp);
  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const bgColor =
    status === "active"
      ? "white"
      : status === "unknown"
      ? "yellow-500"
      : "gray-500";

  return (
    <div className="w-[100vw] h-[100vh] z-40 fixed top-0 left-0 right-0 flex justify-center items-center">
      <div className="px-3 py-5 md:p-6 bg-white shadow-2xl w-4/5 md:w-2/5 rounded-md z-50">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <ImCross size="1em" />
          </button>
        </div>

        <div className="py-5 md:py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{type}</h1>
            <span className={`bg-${bgColor} px-2 py-1 shadow-md rounded`}>
              {status}
            </span>
          </div>

          <p className="pt-5">
            {details ? details : "Reentered after three weeks in orbit"}
          </p>

          <div className="pt-3">
            <p className="md:text-lg">
              Launched Date :{" "}
              <span>
                {hours}:{minutes} {day}/{month}/{year}
              </span>
            </p>
          </div>

          <div className="pt-3 pb-2">
            <p className="md:text-lg">
              Landings : <span>{landings}</span>
            </p>
          </div>

          {missions.length > 0 ? (
            missions.map(({ name, flight }, index) => (
              <div
                key={index}
                className="mt-3 flex flex-wrap items-center justify-between"
              >
                <h2 className="">
                  Name:{" "}
                  <span className="text-md font-bold text-gray-800">
                    {name}
                  </span>
                </h2>
                <p className="">
                  flight:{" "}
                  <span className="text-md font-bold text-gray-800">
                    {flight}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <div className="mt-3 flex items-center justify-between">
              <h2 className="text-base font-bold">No Mission Available</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
