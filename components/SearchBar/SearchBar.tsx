"use client";

import { setTerm } from "@/redux/slices/searchSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [localTerm, setLocalTerm] = useState(searchTerm);
  const [debouncedTerm] = useDebounce(localTerm, 300);
  useEffect(() => {
    dispatch(setTerm(debouncedTerm));
  }, [debouncedTerm, dispatch]);
  return (
    <TextField
      placeholder="Пошук за заголовком..."
      id="outlined-basic"
      variant="outlined"
      value={localTerm}
      onChange={({ target }) => setLocalTerm(target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default SearchBar;
