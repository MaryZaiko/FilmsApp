import React from "react";
import "./EmptyState.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { type } from "@testing-library/user-event/dist/type";
import EmptyImg from "../../assets/EmptyImg";

const EmptyState = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div className={classnames("emptyStateContainer")}>
      <EmptyImg fill={"#8080806b"} />
      <p
        className={classnames(
          isDarkTheme ? "emptyStateTitle" : "emptyStateTitleDark"
        )}
      >
        No films
      </p>
    </div>
  );
};

export default EmptyState;
