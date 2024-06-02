import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { ClipLoader } from 'react-spinners';

const MovieList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieItem = styled.li`
  margin: 10px;
  padding: 10px;
  background-color: #333;
  border-radius: 5px;
  width: 200px;
  text-align: center;
`;

const MovieLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-left: 10px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({ movies, loading }) => {
  return (
    <div>
      <Banner />
      <SearchContainer>
        <h1>Find your movies !</h1>
        <div>
          <Input type="text" placeholder="Search for a movie..." />
          <Button>🔍</Button>
        </div>
        {loading ? (
          <SpinnerContainer>
            <ClipLoader color={"#ffffff"} loading={loading} size={50} />
          </SpinnerContainer>
        ) : (
          <MovieList>
            {movies.map(movie => (
              <MovieItem key={movie.id}>
                <MovieLink to={`/movie/${encodeURIComponent(movie.title)}`}>{movie.title}</MovieLink> {/* 영화 제목을 URL에 사용 */}
              </MovieItem>
            ))}
          </MovieList>
        )}
      </SearchContainer>
    </div>
  );
};

export default MainPage;
