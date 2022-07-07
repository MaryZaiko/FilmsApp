import React, { useState } from "react";
import "./SingleSelect.css";
import classnames from "classnames";
import Select, { OnChangeValue, SingleValue } from "react-select";
import { Theme, useThemeContext } from "../../context/themeModeContext";

import { IOption } from "../../common/types";

const SingleSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [currentCountry, setCurrentCountry] = useState("france");
  const options: IOption[] = [
    {
      value: "use",
      label: "USA",
    },
    {
      value: "russia",
      label: "Russia",
    },
    {
      value: "france",
      label: "France",
    },
    {
      value: "germany",
      label: "Germany",
    },
    {
      value: "japan",
      label: "Japan",
    },
  ];

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
