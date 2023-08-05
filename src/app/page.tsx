import { Hands } from "@Hands";
import { Header } from "@Header";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="container flex w-[250px] flex-col gap-8 sm:w-[450px] md:w-[600px] lg:w-[900px]">
        <Header heading="Chloe Winkel" />
        <div className="gap-y-8" />
        <Link href="graphic-design">
          <p className="grow text-center text-4xl">Graphic Design</p>
        </Link>
        <div className="gap-y-8" />
        <Link href="/about-me">
          <Hands />
        </Link>
      </div>
    </main>
  );
};

export default Home;
