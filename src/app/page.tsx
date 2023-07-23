import Image from "next/image";
import Link from "next/link";
import bannerImg from "./banner.svg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-6xl">Chloe Winkel</h1>
        <div className="gap-y-8"></div>
        <p className="text-center text-xl">Brands</p>
        <div>
          <Link href="branding">
            <div className={"image-container"}>
              <Image
                src={bannerImg}
                alt="branding"
                fill={true}
                className={"image"}
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
