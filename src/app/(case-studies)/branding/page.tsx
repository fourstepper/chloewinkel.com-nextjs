import squareImage from './square.svg';
import Image from 'next/image';
import Link from 'next/link';
// import vercelLogo from "./vercel.svg";

export default async function Brandings() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-6xl">Branding case studies </h1>
      <p className="text-center text-lg">
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
      </p>
      <p className="text-center text-xl">Example case study</p>
      <div className="flex flex-row place-content-center gap-8">
        <Link href="branding/example-brand">
          <div className="relative h-[300px] w-[300px] grow">
            <Image
              alt="just a square"
              fill
              src={squareImage}
            />
          </div>
        </Link>
      </div>
      {/* <div className="grid grid-flow-col justify-items-center pt-8"> */}
      {/*   <Image src={vercelLogo} alt="vercel logo" width={1000} height={600} /> */}
      {/* </div> */}
      {/* <c.p>This could be some banner or something like that</c.p> */}
    </div>
  );
}
