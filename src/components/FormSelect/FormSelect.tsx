import React, { useEffect, useState } from "react";
import "./FormSelect.css";
import classnames from "classnames";
import SingleSelect from "../SingleSelect";
import MultiSelect from "../MultiSelect";
import XMarkSVG from "../../assets/XMarkSVG";
import Button from "../Button";
import Input from "../Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  FilmsSelector,
  setAllFilters,
  setFiltersCountry,
  setFiltersGenres,
  setIsVisibleFormSelect,
} from "../../redux/reducers/filmsReducer";
import { IOption, SortByTabsEnum } from "../../common/types";
import Select, { OnChangeValue, SingleValue } from "react-select";
import { countries } from "../SingleSelect/countries";

const FormSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const isVisibleForm = useSelector(FilmsSelector.getIsVisibleFormSelect);

  const [sortBy, setSortBy] = useState("movie");
  const [yearFrom, setYearsFrom] = useState(2021);
  const [yearTo, setYearsTo] = useState(2022);

  const [ratingFrom, setRatingFrom] = useState(5);
  const [ratingTo, setRatingTo] = useState(10);
  const [currentGenre, setCurrentGenre] = useState([""]);
  const [currentCountry, setCurrentCountry] = useState("");

  const options: IOption[] = [
    { label: "Romance", value: "romance" },
    { label: "Mystery", value: "mystery" },
    { label: "Horror", value: "horror" },
    { label: "Science Fiction", value: "scienceFiction" },
    { label: "Comedy", value: "comedy" },
    { label: "Thriller", value: "thriller" },
    { label: "Action", value: "action" },
    { label: "Drama", value: "drama" },
  ];
  const optionsCountry: IOption[] = countries;

  useEffect(() => {
    dispatch(setFiltersGenres(currentGenre));
  }, [currentGenre]);

  useEffect(() => {
    dispatch(setFiltersCountry(currentCountry));
  }, [currentCountry]);

  const getValueGenres = () => {
    return currentGenre
      ? options.filter((option) => currentGenre.indexOf(option.value) >= 0)
      : [];
  };

  const onChangeGenres = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentGenre((newValue as IOption[]).map((v: any) => v.value));
  };

  const getValueCountry = () => {
    return currentCountry
      ? optionsCountry.find((c) => c.value === currentCountry)
      : "";
  };

  const onChangeCountry = (newValue: SingleValue<string | IOption>) => {
    setCurrentCountry((newValue as IOption).value);
  };

  const onClickSortBtn = (value: string) => {
    setSortBy(value);
  };

  const onClickFiltersClose = () => {
    dispatch(
      isVisibleForm
        ? setIsVisibleFormSelect(false)
        : setIsVisibleFormSelect(true)
    );
  };
  const onChangeInputYearFrom = (e: any) => {
    setYearsFrom(e.target.value);
  };
  const onChangeInputYearTo = (e: any) => {
    setYearsTo(e.target.value);
  };

  const onChangeInputRatingFrom = (e: any) => {
    setRatingFrom(e.target.value);
  };
  const onChangeInputRatingTo = (e: any) => {
    setRatingTo(e.target.value);
  };

  const onClickResult = () => {
    dispatch(
      setAllFilters({
        sort: sortBy,
        genre: currentGenre,
        years: { from: yearFrom.toString(), to: yearTo.toString() },
        rating: { from: ratingFrom.toString(), to: ratingTo.toString() },
        countries: currentCountry.toLowerCase(),
      })
    );
    onClickFiltersClose()
  };

  return (
    <div
      className={classnames(
        "formSelectWrapper",
        isDarkTheme ? "formSelectWrapperDark" : "formSelectWrapperLight",
        { ["formSelectVisible"]: isVisibleForm }
      )}
    >
      <div className="formSelectHeader">
        <h2>Filters</h2>
        <div className="formSelectClose" onClick={onClickFiltersClose}>
          <XMarkSVG fill="#AFB2B6" />
        </div>
      </div>

      <div className="formSelectContentWrapper">
        <div className="formSelectContent">
          <div className="formSelectItem">
            <span>Sort by</span>
            <div className="btnsSortWrapper">
              <Button
                onClick={() => onClickSortBtn(SortByTabsEnum.Movie)}
                btnContent={"Movie"}
                value="movie"
                className={classnames(
                  "btnSort btnSortRight",
                  isDarkTheme ? "btnSortDark" : "btnSortLight",
                  {
                    [isDarkTheme ? "btnSortActiveDark" : "btnSortActiveLight"]:
                      sortBy === SortByTabsEnum.Movie,
                  }
                )}
              />
              <Button
                onClick={() => onClickSortBtn(SortByTabsEnum.Series)}
                btnContent={"Series"}
                value="series"
                className={classnames(
                  "btnSort btnSortLeft",
                  isDarkTheme ? "btnSortDark " : "btnSortLight ",
                  {
                    [isDarkTheme ? "btnSortActiveDark" : "btnSortActiveLight"]:
                      sortBy === SortByTabsEnum.Series,
                  }
                )}
              />
            </div>
          </div>

          <div className={classnames("multiSelect", "formSelectItem")}>
            <span>Genre</span>

            <Select
              classNamePrefix={isDarkTheme ? "multiSelect" : "multiSelectLight"}
              onChange={onChangeGenres}
              value={getValueGenres()}
              options={options}
              isMulti
            />
          </div>

          <div className="formSelectItem">
            <span>Years</span>
            <div className="formSelectSortInterval">
              <Input
                value={yearFrom}
                onChange={(e) => onChangeInputYearFrom(e)}
                type={"number"}
                placeholder="From"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
              <Input
                value={yearTo}
                onChange={(e) => onChangeInputYearTo(e)}
                type={"number"}
                placeholder="To"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
            </div>
          </div>

          <div className="formSelectItem">
            <span>Rating</span>
            <div className="formSelectSortInterval">
              <Input
                value={ratingFrom}
                onChange={(e) => onChangeInputRatingFrom(e)}
                type={"number"}
                placeholder="From"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
              <Input
                value={ratingTo}
                onChange={(e) => onChangeInputRatingTo(e)}
                type={"number"}
                placeholder="To"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
            </div>
          </div>

          <div className={classnames("singleSelect", "formSelectItem")}>
            <span>Country</span>

            <Select
              classNamePrefix={
                isDarkTheme ? "singleSelect" : "singleSelectLight"
              }
              onChange={onChangeCountry}
              value={getValueCountry()}
              options={optionsCountry}
              placeholder={"Select country"}
            />
          </div>
        </div>

        <div className="formSelectFooter">
          <Button
            btnContent={"Clear filter"}
            className={classnames(
              "btnSettingsSort",
              isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
            )}
          />
          <Button
            onClick={onClickResult}
            btnContent={"Show results"}
            className={classnames(
              "btnSettingsSort",
              isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default FormSelect;
