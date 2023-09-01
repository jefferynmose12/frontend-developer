import React, { memo } from "react";
import Search from "./Search";
import useFetch from "../hook/useFetch";
import ReactLoading from "react-loading";
import Card from "./Card";
import usePagination from "../hook/usePagination";
import useModal from "../hook/useModal";
import Modal from "./Modal";

const List = () => {
  const { loading, error } = useFetch();
  const { openModal, details, handleCloseModal } = useModal();

  const {
    currentItems,
    handleNextPage,
    handlePrevPage,
    totalPages,
    currentPage,
  } = usePagination();

  return (
    <div className="bg-gray-200 w-full pb-20">
      <div className="h-60 flex flex-col gap-5 justify-center items-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Find Your Right Capsules
        </h2>
        <Search />
      </div>

      <div className="mx-5 md:mx-14 lg:mx-32 xl:mx-44 bg-gray-500 min-h-80 p-5">
        <div className="flex gap-5 items-center justify-center flex-wrap w-full">
          {loading ? (
            <div className="h-40">
              <ReactLoading
                type={"spin"}
                color={"black"}
                height={"20%"}
                width={"20%"}
              />
            </div>
          ) : error ? (
            <div>
              <h1>Something Went Wrong</h1>
            </div>
          ) : currentItems?.length > 0 ? (
            currentItems.map((item, index) => (
              <Card key={item.original_launch_unix} id={index} {...item} />
            ))
          ) : (
            <>
              <h1>No Data Available</h1>
            </>
          )}
        </div>

        {currentItems.length > 0 && (
          <div className="flex items-center justify-between gap-10 py-10">
            <button
              className="bg-gray-200 text-black text-sm font-bold w-40 md:w-32 h-10 hover:bg-black hover:text-gray-200"
              onClick={() => handlePrevPage()}
            >
              {"<"} Previous
            </button>
            <p className="text-white">{currentPage}</p> /{" "}
            <p className="text-white">{totalPages}</p>
            <button
              className="bg-gray-200 text-black text-sm font-bold w-32 h-10 hover:bg-black hover:text-gray-200"
              onClick={() => handleNextPage()}
            >
              Next {">"}
            </button>
          </div>
        )}
      </div>

      {openModal && (
        <Modal closeModal={handleCloseModal} allDetails={details} />
      )}
    </div>
  );
};

export default memo(List);
