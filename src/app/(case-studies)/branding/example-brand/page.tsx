import Image from "next/image";
import nextLogo from "./next.svg";

export default function Brand() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-6xl">Example brand</h1>
      <p className="text-center text-l">
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
      <p className="text-center text-xl">Single Image</p>
      <Image
        src={nextLogo}
        alt="next logo"
        width="400"
        height="30"
        className="m-auto"
      />
      <p className="text-center text-xl">Double image</p>
      <div className="flex flex-wrap place-content-center gap-8">
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
      </div>
      <p className="text-center text-xl">Quadro Image</p>
      <div className="flex flex-wrap place-content-center gap-8">
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
        <Image src={nextLogo} alt="next logo" width="400" height="30" />
      </div>
    </div>
  );
}
