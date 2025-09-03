import { Metadata } from "next";
import HomePage from "./home/page";
import FooterArea from "@/components/layout/footer/FooterArea";
import HeaderArea from "@/components/layout/header/HeaderArea";
import Wrapper from "@/components/layout/Wrapper";

export const metadata: Metadata = {
  title: "Home - Rainbow Themes",
};

const Home = () => {
  return (
    <>
      <Wrapper>
        <HeaderArea />
        <main>
          <HomePage />
        </main>
        <FooterArea />
      </Wrapper>
    </>
  );
};

export default Home;
