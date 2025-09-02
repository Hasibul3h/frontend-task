export interface AppContextType {
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideMenu: () => void;
  scrollDirection: string;
  setScrollDirection: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openVideoModal: () => void;
  isOpen:boolean,
  toggleOpen:() => void;
  isSearchOpen:boolean,
  setIsSearchOpen:React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebarMenu:() => void;
  sidebarHandle: () => void;
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

//define interface for PageParams props
export interface PageParamsProps {
  params: Promise<{ id: number }>;
}