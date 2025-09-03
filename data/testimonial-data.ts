import testimonialImg1 from "../public/assets/img/testimonial/testimonial-img-1.png";
import testimonialImg2 from "../public/assets/img/testimonial/testimonial-img-2.png";
import testimonialImg3 from "../public/assets/img/testimonial/testimonial-img-3.png";
import testimonialImg4 from "../public/assets/img/testimonial/testimonial-img-4.png";
import testimonialImg5 from "../public/assets/img/testimonial/testimonial-img-5.png";
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
  { id: 1, image: testimonialImg1 },
  { id: 2, image: testimonialImg2 },
  { id: 3, image: testimonialImg3 },
  { id: 4, image: testimonialImg4 },
  { id: 5, image: testimonialImg5 },
  { id: 6, image: testimonialImg2 },
  { id: 7, image: testimonialImg3 },
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
