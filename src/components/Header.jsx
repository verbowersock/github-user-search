import styled from "styled-components";
import Search from "./Search";
import { PRIMARY } from "../Constants";

const HeaderWrapper = styled.section`
  padding: 20px;
  height: 65px;
  background: ${PRIMARY};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AppTitle = styled.h4`
  color: white;
  font-size: 2em;
  font-weight: bold;
  margin: 0px;
  padding-right: 100px;
`;

function Header({ onSearch }) {
  return (
    <HeaderWrapper>
      <AppTitle>Github User Search</AppTitle>
      <Search onSearch={onSearch}></Search>
    </HeaderWrapper>
  );
}

export default Header;
