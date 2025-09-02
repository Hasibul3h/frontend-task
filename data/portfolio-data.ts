import { StaticImageData } from 'next/image';
import portfolioImg1 from '../public/assets/img/portfolio/portfolio-img-1.png'
import portfolioImg2 from '../public/assets/img/portfolio/portfolio-img-2.png'
import portfolioImg3 from '../public/assets/img/portfolio/portfolio-img-3.png'

interface Portfolio {
  id: number;
  badge: string;
  title: string;
  image: StaticImageData;
}

export const portfolioData: Portfolio[] = [
  {
    id: 1,
    badge: "2025, Business",
    title: "Business Consulting Service",
    image: portfolioImg1,
  },
  {
    id: 2,
    badge: "2025, Business",
    title: "Business Consulting Service",
    image: portfolioImg2,
  },
  {
    id: 3,
    badge: "2025, Business",
    title: "Business Consulting Service",
    image: portfolioImg3,
  },
  {
    id: 4,
    badge: "2025, Business",
    title: "Business Consulting Service",
    image: portfolioImg1,
  },
  {
    id: 5,
    badge: "2025, Business",
    title: "Business Consulting Service",
    image: portfolioImg1,
  },
];
