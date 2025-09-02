import { StaticImageData } from 'next/image';
import serviceImg1 from '../public/assets/img/service/services-img-1.png'
import serviceImg2 from '../public/assets/img/service/services-img-2.png'
import serviceImg3 from '../public/assets/img/service/services-img-3.png'
import serviceImg4 from '../public/assets/img/service/services-img-4.png'

interface Service {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}


export const serviceData: Service[] = [
  {
    id: 1,
    badge: "Service-1",
    title: "Digital Marketing",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg1,
    link: "#",
  },
  {
    id: 2,
    badge: "Service-2",
    title: "Business Strategy",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg2,
    link: "#",
  },
  {
    id: 3,
    badge: "Service-3",
    title: "Finance Consultant",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg3,
    link: "#",
  },
  {
    id: 4,
    badge: "Service-4",
    title: "One-to-one Consulting",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg4,
    link: "#",
  },
  {
    id: 5,
    badge: "Service-5",
    title: "Digital Marketing",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg1,
    link: "#",
  },
  {
    id: 6,
    badge: "Service-6",
    title: "Business Strategy",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg2,
    link: "#",
  },
  {
    id: 7,
    badge: "Service-7",
    title: "Finance Consultant",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg3,
    link: "#",
  },
  {
    id: 8,
    badge: "Service-8",
    title: "One-to-one Consulting",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    image: serviceImg4,
    link: "#",
  },
];
