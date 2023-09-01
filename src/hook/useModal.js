import { useCallback } from "react";
import { useCustomContext } from "../context/ContextProvider";

const useModal = () => {
  const { openModal, details, setOpenModal, setDetails } = useCustomContext();

  const handlepassDetails = useCallback((data) => {
    setOpenModal(true);
    setDetails(data);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
    setDetails();
  };

  return { handlepassDetails, openModal, details, handleCloseModal };
};

export default useModal;
