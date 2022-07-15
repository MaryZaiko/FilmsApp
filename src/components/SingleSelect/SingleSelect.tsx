import React, { useState } from "react";
import "./SingleSelect.css";
import classnames from "classnames";
import Select, { SingleValue } from "react-select";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { IOption } from "../../common/types";
import { countries } from "./countries";

const SingleSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [currentCountry, setCurrentCountry] = useState("france");
  const options: IOption[] = countries;

  const getValueCountry = () => {
    return currentCountry
      ? options.find((c) => c.value === currentCountry)
      : "";
  };

  const onChangeCountry = (newValue: SingleValue<string | IOption>) => {
    setCurrentCountry((newValue as IOption).value);
  };

  return (
    <div className={classnames("singleSelect")}>
      <Select
        classNamePrefix={isDarkTheme ? "singleSelect" : "singleSelectLight"}
        onChange={onChangeCountry}
        value={getValueCountry()}
        options={options}
        placeholder={"Select country"}
      />
    </div>
  );
};
export default SingleSelect;
