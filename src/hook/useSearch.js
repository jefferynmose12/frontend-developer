import { useCallback } from 'react'
import { useCustomContext } from '../context/ContextProvider'
import useFetch from './useFetch'

const useSearch = (props) => {
    const { navigate } = props || {}
    const { searchValue, searchByValue, setSearchValue, setSearchByValue } = useCustomContext()
    const { fetchData } = useFetch()

    const handleChangeSearch = useCallback((e) => {
      const v = e.target.value
      setSearchValue(v)
      navigate(`?search_by=${searchByValue}&search=${v}`)
      fetchData()
    }, [searchValue, fetchData, setSearchByValue, navigate])
    
    const handleChangeSearchBy = useCallback((e) => {
      const v = e.target.value
      setSearchByValue(v)
      navigate(`?search_by=${v}&search=${searchValue}`)
      fetchData()
    }, [searchByValue, fetchData, setSearchByValue, navigate])

  return {
    searchValue,
    searchByValue,
    handleChangeSearch,
    handleChangeSearchBy
  }
}

export default useSearch