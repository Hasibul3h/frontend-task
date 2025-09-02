export interface SubmenuItem {
  title: string;
  link: string;
  count?: string;
  age?: string;
  programImg?: boolean;
  img?: string;
  btn?: string;
}

export interface MegaMenuTwoItem {
  title: string;
  link: string;
  submenus: SubmenuItem[];
}

export interface MegaMenuItem {
  title: string;
  link: string;
  submenus: SubmenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  hasDropdown?: boolean;
  megaMenu?: boolean;
  megaMenuTwo?: boolean;
  pages?: boolean;
  submenus?: SubmenuItem[];
  mega_menus_two?: MegaMenuTwoItem[];
  mega_menus?: MegaMenuItem[];
}
