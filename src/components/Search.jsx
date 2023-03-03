import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./../assets/search.svg";
import { SECONDARY } from "../Constants";

const SearchBarContainer = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  position: relative;
`;
const SearchBar = styled.input`
  flex: 1;
  border-radius: 50px;
  border: 1px solid white;
  padding-left: 20px;
  padding-right: 60px;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${SECONDARY};
  border-radius: 50px;
  border: 1px solid transparent;
  position: absolute;
  right: 0px;
  padding: 10px;
  cursor: pointer;
`;

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
    e.target[0].value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchBarContainer>
        <SearchBar
          type="text"
          className="input"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Find a user"
        />
        <SearchButton>
          <SearchIcon type="submit"></SearchIcon>
        </SearchButton>
      </SearchBarContainer>
    </form>
  );
}

export default Search;
