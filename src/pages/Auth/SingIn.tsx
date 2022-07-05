import React, { FC } from "react";
import "./SingIn.css";
import FilmsList from "../../components/FilmsList";
import PagesWrapper from "../../components/PagesWrapper";

import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";
import Logo from "../../components/Logo";
import SingInForm from "../../components/LoginForm";

// type SingInProps = {
//   data: CardTypes[];
// };

const SingIn = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  

  return (<div>
    {/* <PagesWrapper /> */}
    <div className={classnames('SingInPageWrapper', isDarkTheme ?  'SingInPageWrapperDark' : 'SingInPageWrapperLight')} >
      <Logo className='SingInPageLogo'/>
      <SingInForm />
    </div>
  </div>
   
  );
};

export default SingIn;
