import React, { memo, useState, useContext } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState();

  const location = useLocation();
  const parsedSearch = queryString.parse(location.search);
  const { search = "", search_by = "all" } = parsedSearch;
  const [searchValue, setSearchValue] = useState(search);
  const [searchByValue, setSearchByValue] = useState(search_by);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const values = {
    searchValue,
    searchByValue,
    setSearchValue,
    setSearchByValue,
    toggle,
    handleToggle,
    openModal,
    details,
    setDetails,
    setOpenModal,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default memo(ContextProvider);

export const useCustomContext = () => {
  const {
    searchValue,
    searchByValue,
    setSearchValue,
    setSearchByValue,
    toggle,
    handleToggle,
    openModal,
    details,
    setDetails,
    setOpenModal,
  } = useContext(MyContext);

  return {
    searchValue,
    searchByValue,
    setSearchValue,
    setSearchByValue,
    toggle,
    handleToggle,
    openModal,
    details,
    setDetails,
    setOpenModal,
  };
};
