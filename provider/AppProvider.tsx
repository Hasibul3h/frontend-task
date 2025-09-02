"use client";

import { AppContextType } from "@/types/custom-interface";
import React, { createContext, useState } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [inputValue, setInputValue] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const openVideoModal = () => setIsVideoOpen(!isVideoOpen);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  // Toggle Functions
  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);
  const toggleSidebarMenu = () => setIsSearchOpen(!isSearchOpen);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  const sidebarHandle = () => {
    setIsCollapse(!isCollapse);
  };

  const contextValue: AppContextType = {
    scrollDirection,
    setScrollDirection,
    sideMenuOpen,
    toggleSideMenu,
    setSideMenuOpen,
    inputValue,
    setInputValue,
    filterType,
    setFilterType,
    isVideoOpen,
    setIsVideoOpen,
    openVideoModal,
    isOpen,
    toggleOpen,
    isSearchOpen,
    setIsSearchOpen,
    toggleSidebarMenu,
    sidebarHandle,
    isCollapse,
    setIsCollapse,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
