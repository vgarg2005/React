import { use, useState } from "react";
import { ThemeContext, LangContext, UserContext } from "./context"

const Appprovider=({children})=>{
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState({name:"Guest"});

  const toggleTheme=()=>{
    setTheme((prev)=>{prev==="light"?"dark":"light"});
  }
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    <LangContext.Provider value={{lang, setLang}}>
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    </LangContext.Provider>
  </ThemeContext.Provider>
}

export default Appprovider;