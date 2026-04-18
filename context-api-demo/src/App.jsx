import { useContext } from "react";
import { ThemeContext, LangContext, UserContext } from "./context";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "black" : "white",
          padding: "20px",
        }}
      >
        <p>Theme: {theme}</p>
        <p>Language: {lang}</p>
        <p>User: {user}</p>

        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => setLang("fr")}>French</button>
        <button onClick={() => setLang("en")}>English</button>
      </div>
    </div>
  );
};

export default App;