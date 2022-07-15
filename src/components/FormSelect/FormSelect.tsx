import React, { useState } from "react";
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
  setIsVisibleFormSelect,
} from "../../redux/reducers/filmsReducer";
import { SortByTabsEnum } from "../../common/types";

const FormSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [sortBy, setSortBy] = useState("rating");
  const dispatch = useDispatch();

  const onClickSortBtn = (value: string) => {
    setSortBy(value);
  };

  const isVisibleForm = useSelector(FilmsSelector.getIsVisibleFormSelect);

  const onClickFiltersClose = () => {
    dispatch(
      isVisibleForm
        ? setIsVisibleFormSelect(false)
        : setIsVisibleFormSelect(true)
    );
  };
  
const filterGenre = useSelector(FilmsSelector.getFiltersGenres);


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

          <div className="formSelectItem">
            <span>Genre</span>
            <MultiSelect />
          </div>

          <div className="formSelectItem">
            <span>Years</span>
            <div className="formSelectSortInterval">
              <Input
                type={"number"}
                placeholder="From"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
              <Input
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
                type={"number"}
                placeholder="From"
                className={classnames(
                  "inputSearch",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
              <Input
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
            <span>Country</span>
            <SingleSelect />
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
