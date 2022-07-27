import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import PagesWrapper from "../../components/PagesWrapper";
import Authorization from "../Authorization";
import MainPage from "../MainPage";
import Settings from "../Settings";
import SingleFilm from "../SingleFilm";
import RegistrationForm from "../../components/RegistrationForm";
import Confirmation from "../../components/Confirmation";
import { AuthSelector, getUserInfo } from "../../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo(""));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route
            path={"/films"}
            element={
              <PagesWrapper>
                <MainPage />
              </PagesWrapper>
            }
          ></Route>
          <Route
            path={"/trends"}
            element={
              <PagesWrapper>
                <MainPage isTrends />
              </PagesWrapper>
            }
          ></Route>
          <Route
            path={"/favorites"}
            element={
              <PagesWrapper>
                <MainPage />
              </PagesWrapper>
            }
          />
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

          <Route path={"*"} element={<Navigate to={"/films"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path={"/auth"}
            element={
              <Authorization>
                <LoginForm />
              </Authorization>
            }
          />
          <Route
            path={"/registration"}
            element={
              <Authorization>
                <RegistrationForm />
              </Authorization>
            }
          />
          <Route
            path={"/confirm"}
            element={
              <Authorization>
                <Confirmation />
              </Authorization>
            }
          />
          <Route path={"*"} element={<Navigate to={"/auth"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
