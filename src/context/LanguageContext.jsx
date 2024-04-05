import { createContext, useState, useContext } from "react";

export const LanguageContext = createContext();

const lng = localStorage.getItem("i18nextLng");

const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(lng);

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
