import Link from "next/link";
import Image from "next/image";
import arrowUpRight from "../images/arrow-up-right.svg";

const GraphicDesignLinkBox = ({
  title,
  description,
  href,
  year,
}: {
  title: string;
  description: string;
  href: string;
  year: string;
}) => {
  return (
    <Link href={href}>
      <div className="relative w-72 h-72">
        <div className="relative top-[100%] translate-y-[-100%] border-solid border-2 border-black w-60 h-60">
          <p className="absolute top-2 left-4 text-2xl w-36">{title}</p>
          <p className="absolute bottom-2 left-4 text-xl">{description}</p>
          <div className="absolute right-0 top-0">
            <Image
              src={arrowUpRight}
              alt="arrow-up-right"
              width={40}
              height={40}
            />
          </div>
        </div>
        <p className="absolute text-lime-700 text-lg text-center right-2 bottom-2">
          {year}
        </p>
      </div>
    </Link>
  );
};

export default GraphicDesignLinkBox;
