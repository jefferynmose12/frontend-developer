import React, { memo } from "react";
import useModal from "../hook/useModal";

const Card = (props) => {
  const { handlepassDetails } = useModal();

  const { capsule_id, details, missions, original_launch, status, id } =
    props || {};

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
    <div
      data-testid={`capsule-item-${id}`}
      onClick={() => handlepassDetails(props)}
      className="cursor-pointer bg-gray-800 shadow-md shadow-gray-600 p-2 pt-3 rounded-md w-full md:w-[40%] lg:w-[48.5%]"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center pl-3">
          <div className={`h-3 w-3 rounded-md bg-${bgColor}`} />
          <h4 className="text-white font-bold">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </h4>
        </div>

        <div>
          <p className="text-white font-bold text-sm">
            {hours}:{minutes} {day}/{month}/{year}
          </p>
        </div>
      </div>

      <div className="bg-gray-500 p-2 mt-4 mb-2 rounded flex flex-col gap-2">
        <h2 className="text-lg text-white font-bold">
          {capsule_id.charAt(0).toUpperCase() + capsule_id.slice(1)}
        </h2>
        <p className="text-sm text-white">
          {details
            ? details.slice(0, 60) + "..."
            : "Reentered after three weeks in orbit"}
        </p>

        {missions.length > 0 ? (
          missions.slice(0, 1).map(({ name, flight }, index) => (
            <div
              key={index}
              className="mt-3 flex flex-wrap items-center justify-between"
            >
              <h2 className="text-sm text-white">
                Name:{" "}
                <span className="text-md font-bold text-gray-800">{name}</span>
              </h2>
              <p className="text-sm text-white">
                flight:{" "}
                <span className="text-md font-bold text-gray-800">
                  {flight}
                </span>
              </p>
            </div>
          ))
        ) : (
          <div className="mt-3 flex items-center justify-between">
            <h2 className="text-md text-white font-bold">
              No Mission Available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
