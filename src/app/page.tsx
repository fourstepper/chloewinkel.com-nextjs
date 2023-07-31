import bannerImg from "./banner.svg";
import { Hands } from "@Hands";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-6xl">Chloe Winkel</h1>
        <div className="gap-y-8" />
        <p className="text-center text-xl">Brands</p>
        <div>
          <Link href="branding">
            <div className="image-container">
              <Image
                alt="branding"
                className="image"
                fill
                src={bannerImg}
              />
            </div>
          </Link>
        </div>
        <p className="text-center text-xl">Brands</p>
        <Hands />
      </div>
    </main>
  );
};

export default Home;
