import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = ({ getSearchValue, getPageValue, mediatype }) => {
  //const mediatype = useLocation().pathname?.includes("movie") ? "movie" : "tv";
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value.toLowerCase());
  const handleSubmit = (e) => {
    return value
      ? (getSearchValue(value),
        setValue(""),
        getPageValue(1),
        navigate(`/search/${mediatype}/${value}`))
      : e.prevent.default();
  };

  return (
    <Flex pb="1vh" justifyContent={"center"}>
      <InputGroup width={"30%"}>
        <Input
          bg={"white"}
          value={value}
          onChange={handleChange}
          placeholder="search..."
          size="md"
          color={"black"}
          borderColor={"black"}
          borderWidth={"2px"}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <InputRightElement children={<SearchIcon onClick={handleSubmit} />} />
      </InputGroup>
    </Flex>
  );
};
export default SearchBar;
