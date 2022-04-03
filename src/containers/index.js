import React, {useEffect, useState} from "react";
import "./index.scss";

import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
    const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

}



export default Main;