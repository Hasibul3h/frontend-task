import { StaticImageData } from "next/image";

export interface IBlogItem {
  id: number;
  img: StaticImageData;
  title: string;
  date: string;
  user: string;
  comments: number;
  childreen?: boolean;
  preschool?: boolean;
  kindergarten?: boolean;
  daycare?: boolean;
  tag: string;
  teaser: string;
}
