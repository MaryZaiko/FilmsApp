import React, { useState } from "react";
import "./FormSelect.css";
import classnames from "classnames";
import Select from "react-select";
import SingleSelect from "../SingleSelect";
import MultiSelect from "../MultiSelect";
import XMarkSVG from "../../assets/XMarkSVG";
import Button from "../Button";
import Input from "../Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const FormSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [btnSortActive, setBtnSortActive] = useState("rating");

  const onClickSortBtn = (value: string) => {
    console.log(value);

    setBtnSortActive(value);
  };

  return (
    <div
      className={classnames(
        "formSelectWrapper",
        isDarkTheme ? "formSelectWrapperDark" : "formSelectWrapperLight"
      )}
    >
      <div className="formSelectHeader">
        <h2>Filters</h2>
        <XMarkSVG fill="#AFB2B6" />
      </div>

      <div className="formSelectContentWrapper">
        <div className="formSelectContent">
          <div className="formSelectItem">
            <span>Sort by</span>
            <div className="btnsSortWrapper">
              <Button
                onClick={() => onClickSortBtn("rating")}
                btnContent={"Rating"}
                value="rating"
                className={classnames(
                  "btnSort btnSortRight",
                  isDarkTheme ? "btnSortDark" : "btnSortLight",
                  {
                    [isDarkTheme ? "btnSortActiveDark" : "btnSortActiveLight"]:
                      btnSortActive === "rating",
                  }
                )}
              />
              <Button
                onClick={() => onClickSortBtn("year")}
                btnContent={"Year"}
                value="year"
                className={classnames(
                  "btnSort btnSortLeft",
                  isDarkTheme ? "btnSortDark " : "btnSortLight ",
                  {
                    [isDarkTheme ? "btnSortActiveDark" : "btnSortActiveLight"]:
                      btnSortActive === "year",
                  }
                )}
              />
            </div>
          </div>

          <div className="formSelectItem">
            <span>Full or short movie name</span>
            <Input
              type={"text"}
              placeholder="Your texts"
              className={classnames(
                "inputSearch",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </div>

          <div className="formSelectItem">
            <span>Genre</span>
            <MultiSelect />
          </div>

          <div className="formSelectItem">
            <span>Years</span>
            <div className="formSelectSortInterval">
              <Input type={"number"} placeholder="From" className={classnames(
                "inputSearch",
                isDarkTheme ? "inputDark" : "inputLight"
              )}/>
              <Input type={"number"} placeholder="To" className={classnames(
                "inputSearch",
                isDarkTheme ? "inputDark" : "inputLight"
              )}/>
            </div>
          </div>

          <div className="formSelectItem">
            <span>Rating</span>
            <div className="formSelectSortInterval">
              <Input type={"number"} placeholder="From" className={classnames(
                "inputSearch",
                isDarkTheme ? "inputDark" : "inputLight"
              )}/>
              <Input type={"number"} placeholder="To" className={classnames(
                "inputSearch",
                isDarkTheme ? "inputDark" : "inputLight"
              )}/>
            </div>
          </div>

          <div className="formSelectItem">
            <span>Country</span>
            <SingleSelect />
          </div>
        </div>

        <div className="formSelectFooter">
          <Button btnContent={"Clear filter"} className={classnames(
            "btnSettingsSort",
            isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
          )}/>
          <Button btnContent={"Show results"} className={classnames(
            "btnSettingsSort",
            isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
          )}/>
        </div>
      </div>
    </div>
  );
};
export default FormSelect;
