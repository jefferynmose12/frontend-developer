import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useCustomContext } from "../context/ContextProvider";

const useFetch = () => {
  const { searchValue, searchByValue } = useCustomContext();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SECRET}/capsules?${searchByValue}=${searchValue}`
      );
      setData(response?.data);
      setLoading(false);
      setError();
    } catch (err) {
      setData([]);
      setLoading(false);
      setError("something went wrong!!");
    }
  }, [searchByValue, searchValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useFetch;
