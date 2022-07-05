import React, { FC } from "react";
import "./Authorization.css";
import FilmsList from "../../components/FilmsList";
import PagesWrapper from "../../components/PagesWrapper";

import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";
import Logo from "../../components/Logo";
import SingInForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

// type SingInProps = {
//   data: CardTypes[];
// };

const Authorization = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  

  return (<div>
    {/* <PagesWrapper /> */}
    <div className={classnames('authorizationPageWrapper', isDarkTheme ?  'authorizationPageWrapperDark' : 'authorizationPageWrapperLight')} >
      <Logo className='authorizationPageLogo'/>
     
      {/* <SingInForm /> */}
<RegistrationForm />
   
      <span>© All Rights Reserved</span>
    </div>
  </div>
   
  );
};

export default Authorization;
