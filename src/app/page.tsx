import { Hands } from "@Hands";
import { Header } from "@Header";

const Home = () => {
  return (
    <main>
      <div className="container flex w-[250px] flex-col gap-8 sm:w-[450px] md:w-[600px] ">
        <Header heading="Chloe Winkel" />
        <div className="gap-y-8" />
        <p className="grow text-center text-4xl">Graphic Design</p>
        <Hands />
      </div>
    </main>
  );
};

export default Home;
