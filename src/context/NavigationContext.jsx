import { createContext, useState, useContext } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
  const [sidebarStatus, setSidebarStatus] = useState("hidden");
  const [rotateMenuButton, setRotateMenuButton] = useState("");
  const [rotateSidebarButton, setRotateSidebarButton] = useState("");

  return (
    <NavigationContext.Provider
      value={{
        sidebarStatus,
        setSidebarStatus,
        rotateMenuButton,
        setRotateMenuButton,
        rotateSidebarButton,
        setRotateSidebarButton,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
