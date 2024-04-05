import { createContext, useState, useContext } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("ENG");

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
