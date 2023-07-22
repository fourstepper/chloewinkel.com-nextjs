import * as c from "../../../components/Components";
import Image from "next/image";
import Link from "next/link";

export default async function Brandings() {
  return (
    <section>
      <c.h1> Branding case studies </c.h1>
      <c.p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </c.p>
      <c.FlexGrid>
        <div>
          <c.p>Example case study</c.p>
          <Link href="branding/example-brand">
            <Image
              src="/square.svg"
              alt="just a square"
              width="300"
              height="300"
            />
          </Link>
        </div>
        <div>
          <c.p>Example case study</c.p>
          <Link href="branding/example-brand">
            <Image
              src="/square.svg"
              alt="just a square"
              width="300"
              height="300"
            />
          </Link>
        </div>
        <div>
          <c.p>Example case study</c.p>
          <Link href="branding/example-brand">
            <Image
              src="/square.svg"
              alt="just a square"
              width="300"
              height="300"
            />
          </Link>
        </div>
        <div>
          <c.p>Example case study</c.p>
          <Link href="branding/example-brand">
            <Image
              src="/square.svg"
              alt="just a square"
              width="300"
              height="300"
            />
          </Link>
        </div>
        <div>
          <c.p>Example case study</c.p>
          <Link href="branding/example-brand">
            <Image
              src="/square.svg"
              alt="just a square"
              width="300"
              height="300"
            />
          </Link>
        </div>
      </c.FlexGrid>
      {/* <div className="grid grid-flow-col justify-items-center pt-8"> */}
      {/*   <Image src="/vercel.svg" alt="vercel logo" width={1000} height={600} /> */}
      {/* </div> */}
      {/* <c.p>This could be some banner or something like that</c.p> */}
    </section>
  );
}
