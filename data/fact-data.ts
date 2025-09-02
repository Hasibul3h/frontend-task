interface IFactItem {
  id: number;
  count: number;
  subTitle?: string;
  text?: string;
  sign?: string;
}

const factData: IFactItem[] = [
  {
    id: 1,
    count: 99,
    subTitle: "Business Strategy",
    text: "",
    sign: "%",
  },
  {
    id: 2,
    count: 80,
    subTitle: "Targeted Acquisition",
    text: "",
    sign: "%",
  },
  {
    id: 3,
    count: 62,
    subTitle: "Complete Projects",
    text: "K",
    sign: "+",
  },
  {
    id: 4,
    count: 15,
    subTitle: "Happy Customers",
    text: "K",
    sign: "+",
  },
  {
    id: 5,
    count: 100,
    subTitle: "Consultant Advisors",
    text: "",
    sign: "+",
  }
];
export default factData;
