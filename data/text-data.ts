import { StaticImageData } from 'next/image';
import textShape1 from '../public/assets/img/shape/text-shape-1.svg'
import textShape2 from '../public/assets/img/shape/text-shape-2.svg'

interface TextSlideItem {
  id: number;
  title: string;
  shape: StaticImageData;
}

// Data array
export const textSlidesData: TextSlideItem[] = [
  { id: 1, title: 'Creative', shape: textShape2 },
  { id: 2, title: 'Solutions', shape: textShape1 },
  { id: 3, title: 'Expert Guidance', shape: textShape2 },
  { id: 4, title: 'Consulting', shape: textShape1 },
  { id: 5, title: 'Innovation', shape: textShape2 },
  { id: 6, title: 'Collaboration', shape: textShape1 },
  { id: 7, title: 'Strategy', shape: textShape2 },
  { id: 8, title: 'Growth', shape: textShape1 },
  { id: 9, title: 'Expert Guidance', shape: textShape2 },
  { id: 10, title: 'Consulting', shape: textShape1 },
  { id: 11, title: 'Innovation', shape: textShape2 },
  { id: 12, title: 'Collaboration', shape: textShape1 },
];