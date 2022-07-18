import React, { useEffect, useState } from "react";
import "./SingleSelect.css";
import classnames from "classnames";
import Select, { SingleValue } from "react-select";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { IOption } from "../../common/types";
import { countries } from "./countries";
import { useDispatch } from "react-redux";
import { setFiltersCountry } from "../../redux/reducers/filmsReducer";

const SingleSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState("france");
  const optionsCountry: IOption[] = countries;
  useEffect(() => {
    dispatch(setFiltersCountry(currentCountry));
  }, [currentCountry]);
  const getValueCountry = () => {
    return currentCountry
      ? optionsCountry.find((c) => c.value === currentCountry)
      : "";
  };

  const onChangeCountry = (newValue: SingleValue<string | IOption>) => {
    setCurrentCountry((newValue as IOption).value);
  };

  return (
    <div className={classnames("singleSelect","formSelectItem")}>
            <span>Country</span>
     
      <Select
        classNamePrefix={isDarkTheme ? "singleSelect" : "singleSelectLight"}
        onChange={onChangeCountry}
        value={getValueCountry()}
        options={optionsCountry}
        placeholder={"Select country"}
      />
    </div>
  );
};
export default SingleSelect;
