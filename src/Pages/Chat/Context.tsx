import React, { createContext, useState } from "react";

interface AppContextType {
  open: boolean;
  toggleOpen: () => void;
}
export const AppContext = createContext<AppContextType>({
  open: false,
  toggleOpen: () => {},
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  // State to manage the 'open' value
  const [open, setOpen] = useState(false);

  // Function to toggle the 'open' value
  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("Current open value:", !open);
  };

  // Provide the state and toggle function to the context
  const contextValue: AppContextType = {
    open,
    toggleOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default SidebarProvider;
