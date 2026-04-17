import { createContext, useContext } from "react";

//Empty context
export const ThemeContext=createContext();
export const LangContext=createContext();

//Default context
export const UserContext=createContext({name:"Guest"});