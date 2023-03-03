import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { PRIMARY, SECONDARY } from "../Constants";
import ReactPaginate from "react-paginate";
import UserInfo from "./UserInfo";

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Error = styled.p`
  font-size: 20px;
`;

const StyledReactPaginate = styled(ReactPaginate)`
  list-style-type: none;
  display: flex;
  align-self: center;
  height: 25px;
  margin-top: 50px;
  flex-direction: row;
  a {
    cursor: pointer;
    margin: 7px;

    width: 20px;
  }
  .selected {
    background: ${SECONDARY};
    border-radius: 10px;
  }
`;

const ListContainer = styled.div`
  width: 850px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin: 0px 160px 20px;
`;

const Total = styled.h4`
  color: ${PRIMARY};
`;

const NothingFound = styled.h2`
  margin-top: 100px;
  color: ${PRIMARY};
  text-align: center;
`;

function MainSection({
  loading,
  data,
  error,
  onPageChange,
  pageCount,
  totalCount,
}) {
  const handlePageClick = (obj) => {
    onPageChange(obj);
  };

  return (
    <Main>
      {loading && (
        <LoaderContainer>
          <ThreeDots color={PRIMARY} height={30} width={50} />
        </LoaderContainer>
      )}
      {error && (
        <ErrorContainer>
          <Error>{error}</Error>
        </ErrorContainer>
      )}
      {data.length > 0 && (
        <ListContainer>
          <Total>Total users found: {totalCount}</Total>
          {data.map((user) => {
            return <UserInfo user={user} />;
          })}
          <StyledReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={10}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
          />
        </ListContainer>
      )}
      {totalCount === 0 && data.length === 0 && (
        <NothingFound>
          Sorry! We couldn't find a user with this query.
        </NothingFound>
      )}
    </Main>
  );
}

export default MainSection;
