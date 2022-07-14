import React, { useEffect, useState } from "react";
import "./MultiSelect.css";
import classnames from "classnames";
import Select, { OnChangeValue } from "react-select";
import SingleSelect from "../SingleSelect";
import { IOption } from "../../common/types";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch } from "react-redux";
import { setFiltersGenres } from "../../redux/reducers/filmsReducer";

const MultiSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  const [currentGenre, setCurrentGenre] = useState(["romance"]);
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
  useEffect(() => {
    dispatch(setFiltersGenres(currentGenre));
  }, [currentGenre]);

  const getValueGenres = () => {
    return currentGenre
      ? options.filter((option) => currentGenre.indexOf(option.value) >= 0)
      : [];
  };

  const onChangeGenres = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentGenre((newValue as IOption[]).map((v: any) => v.value));
  };

  return (
    <div className={classnames("multiSelect")}>
      <Select
        classNamePrefix={isDarkTheme ? "multiSelect" : "multiSelectLight"}
        onChange={onChangeGenres}
        value={getValueGenres()}
        options={options}
        isMulti
      />
    </div>
  );
};
export default MultiSelect;
