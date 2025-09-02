import portfolioImg1 from "../public/assets/img/portfolio/portfolio-img-1.png";
import portfolioImg2 from "../public/assets/img/portfolio/portfolio-img-2.png";
import portfolioImg3 from "../public/assets/img/portfolio/portfolio-img-3.png";
import { StaticImageData } from "next/image";

interface TestimonialImageItem {
  id: number;
  image: StaticImageData;
}
interface TestimonialItem {
  id: number;
  name: string;
  designation: string;
  text: string;
  rating: number;
}

export const testimonialImageData: TestimonialImageItem[] = [
  { id: 1, image: portfolioImg1 },
  { id: 2, image: portfolioImg2 },
  { id: 3, image: portfolioImg3 },
  { id: 4, image: portfolioImg2 },
  { id: 5, image: portfolioImg1 },
  { id: 6, image: portfolioImg2 },
  { id: 7, image: portfolioImg3 },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Bm Ashik",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bm Ashik2",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bm Ashik3",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bm Ashik4",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 5,
    name: "Bm Ashik5",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 6,
    name: "Bm Ashik6",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
  {
    id: 7,
    name: "Bm Ashik7",
    designation: "UI/UX Designer",
    text: "Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.",
    rating: 5,
  },
];
