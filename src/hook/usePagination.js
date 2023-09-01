import { useState } from "react";
import useFetch from "./useFetch";

const itemsPerPage = 5;

const usePagination = () => {
  const { data } = useFetch();

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentItems,
    handleNextPage,
    handlePrevPage,
    totalPages,
    currentPage,
  };
};

export default usePagination;
