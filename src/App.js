import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import { useEffect, useState } from "react";
import { SEARCH_API_URL, USER_API_URL } from "./Constants";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState();

  const token = process.env.REACT_APP_TOKEN;

  const onSearchSubmit = (val) => {
    setSearchTerm(val);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      setProfiles([]);
      setTotalCount();
      getSearchResults();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      getSearchResults();
    }
  }, [currentPage, searchTerm]);

  const getSearchResults = async () => {
    let initUsers = [];
    fetch(`${SEARCH_API_URL}?q=${searchTerm}&page=${currentPage}`, {
      headers: { Authorization: `bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setPageCount(
          Math.ceil(data.total_count > 1000 ? 1000 / 30 : data.total_count / 30)
        );
        initUsers = data.items;
        setTotalCount(data.total_count);
        data.items.forEach((user) => {
          fetch(`${USER_API_URL}${user.login}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((userData) => {
              let fetchedUsers = initUsers.map((user) =>
                user.id === userData.id ? Object.assign(user, userData) : user
              );
              setProfiles(fetchedUsers);
            });
        });

        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);
  };
  console.log(pageCount);
  return (
    <AppContainer>
      <Header onSearch={onSearchSubmit} />
      <MainSection
        isLoading={loading}
        data={profiles}
        error={error}
        totalCount={totalCount}
        onPageChange={handlePageChange}
        pageCount={pageCount}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
