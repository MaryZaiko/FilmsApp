import React, { useState } from "react";
import "./MultiSelect.css";
import classnames from "classnames";
import Select, { OnChangeValue } from "react-select";
import SingleSelect from "../SingleSelect";
import { IOption } from "../../common/types";
import { Theme, useThemeContext } from "../../context/themeModeContext";


const MultiSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [currentCountries, setCurrentCountries] = useState(["france"]);
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

  const getValueCountries = () => {
    return currentCountries
      ? options.filter((option) => currentCountries.indexOf(option.value) >= 0)
      : [];
  };

  const onChangeCountries = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map((v: any) => v.value));
  };

  return (
    <div className={classnames("multiSelect")}>
      <Select
        classNamePrefix={isDarkTheme ? "multiSelect" : 'multiSelectLight'}
        onChange={onChangeCountries}
        value={getValueCountries()}
        options={options}
        isMulti
      />
    </div>
  );
};
export default MultiSelect;
