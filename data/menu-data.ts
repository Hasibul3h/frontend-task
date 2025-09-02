import { MenuItem } from "@/types/menu-interface";

const menuData: MenuItem[] = [
  {
    id: 1,
    hasDropdown: true,
    title: "Home",
    link: "/",
    submenus: [
      { title: "Home Style 1", link: "/" },
      { title: "Home Style 2", link: "/home-2" },
      { title: "Home Style 3", link: "/home-3" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Services",
    link: "#",
  },
  {
    id: 4,
    hasDropdown: false,
    title: "Pages",
    link: "#",
  },
  {
    id: 5,
    hasDropdown: false,
    title: "News",
    link: "#",
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "#",
  },
];

export default menuData;
