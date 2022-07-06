import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import PagesWrapper from "../../components/PagesWrapper";
import Authorization from "../Authorization";
import MainPage from "../MainPage";
import Settings from "../Settings";
import SingleFilm from "../SingleFilm";

const MOCK_DATA = [
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: 2017,
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "67/100",
      },
    ],
    Metascore: 67,
    imdbRating: 7.6,
    imdbVotes: 655.156,
    imdbID: "tt3896197",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: 2017,
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "67/100",
      },
    ],
    Metascore: 67,
    imdbRating: 5,
    imdbVotes: 655.156,
    imdbID: "tt3896196",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: 2017,
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "67/100",
      },
    ],
    Metascore: 67,
    imdbRating: 3,
    imdbVotes: 655.156,
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];

const Router = () => {
  const isLoggedIn = true;
  // const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getUserInfo(""));
  //   }
  // }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path={"/"} element={<PagesWrapper />}> */}
          <Route
            path={"/films"}
            element={<PagesWrapper>
              <MainPage data={MOCK_DATA} />
            </PagesWrapper>}
          ></Route>
          <Route
            path={"/trends"}
            element={
              <PagesWrapper>
                <MainPage data={MOCK_DATA}  isTrends/>
              </PagesWrapper>
            }
          ></Route>
          {isLoggedIn && (
            <Route
              path={"/favorites"}
              element={
                <PagesWrapper>
                  <MainPage data={MOCK_DATA}/>
                </PagesWrapper>
              }
            />
          )}
          {/* переадресация на логин */}

          <Route
            path={"/films/:id"}
            element={
              <PagesWrapper>
                <SingleFilm />
              </PagesWrapper>
            }
          />
          <Route
            path={"/settings"}
            element={
              <PagesWrapper>
                <Settings />
              </PagesWrapper>
            }
          />

          <Route path={"/auth"} element={<Authorization />}></Route>
        {/* </Route> */}
        <Route path={"*"} element={<Navigate to={"/films"} replace />} />
        {/* что значт строчка */}


      </Routes>
    </BrowserRouter>
  );
};

export default Router;
