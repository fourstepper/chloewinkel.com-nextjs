import * as c from "../components/Components";
import Image from "next/image";
import Link from "next/link";
import Motion from "../components/Motion";

export default function Home() {
  return (
    <main>
      <c.h1>Chloe Winkel</c.h1>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Something else</c.p>
          <Link href="branding">
            <div className="grow relative w-[300px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-36">
              <Image src="/banner.svg" alt="branding" fill={true} />
            </div>
          </Link>
          <div className="justify-items-center items-center text-center">
            <Motion></Motion>
          </div>
        </div>
      </c.FlexGrid>
    </main>
  );
}
