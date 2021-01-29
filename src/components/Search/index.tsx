import React, { useCallback, useEffect, useState } from "react";
import Rating from "../Rating";
import { Container, InputSearch } from "./styled";
import SearchIcon from '../Icons/Search';
import { useMovies } from "../../hooks/Movies";
import Close from "../Icons/Close";

function Search() {
  const [time, setTime] = useState<any>(null);
  const [value, setValue] = useState<string | null>(null);
  const { setSearch, search } = useMovies();

  const handleSearch = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    clearTimeout(time);
    setValue(event.currentTarget.value)
  }, [setValue, time])

  const cleanSearch = useCallback(() => {
    setValue("")
  }, [])

  useEffect(() => {
    if (value !== null) {
      setTime(setTimeout(function () {
        setSearch(search => { return { ...search, query: value } })
      }, 1500))
    }
  }, [setSearch, value])

  useEffect(() => {
    if (search && search.query)
      setValue(search.query);
  }, [search])

  return (
    <Container>
      <InputSearch>
        <SearchIcon size={25} />
        <input type="text" value={value ? value : ''} placeholder="Type to filter by name" onChange={e => handleSearch(e)} />
        <Close onClick={() => cleanSearch()} />
      </InputSearch>
      <Rating />
    </Container>
  )
}

export default Search;
