import * as c from "../../components/Components";
import Image from "next/image";

export default function Home() {
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
      <div className="py-4"></div>
      <c.GridWrapper>
        <Image src="/square.svg" alt="just a square" width="600" height="600" />
        <Image src="/square.svg" alt="just a square" width="600" height="600" />
        <Image src="/square.svg" alt="just a square" width="600" height="600" />
      </c.GridWrapper>
      <c.GridWrapper>
        <Image src="/vercel.svg" alt="vercel logo" width={1800} height={600} />
      </c.GridWrapper>
      <c.p>This could be some banner or something like that</c.p>
    </section>
  );
}
