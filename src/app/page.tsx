import * as c from "../components/Components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <c.h1>Chloe Winkel</c.h1>
      <c.FlexGrid>
        <div>
          <c.p>Brands</c.p>
          <Link href="branding">
            <Image src="/banner.svg" alt="branding" width="900" height="200" />
          </Link>
        </div>
      </c.FlexGrid>
      <c.FlexGrid>
        <div>
          <c.p>Something else</c.p>
          <Link href="branding">
            <Image src="/banner.svg" alt="branding" width="900" height="200" />
          </Link>
        </div>
      </c.FlexGrid>
    </main>
  );
}
