import arrowUpRight from "../images/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";

export const GraphicDesignLinkBox = ({
  title,
  description,
  href,
  year,
}: {
  readonly description: string;
  readonly href: string;
  readonly title: string;
  readonly year: string;
}) => {
  return (
    <Link href={href}>
      <div className="relative h-72 w-72">
        <div className="relative top-[100%] h-60 w-60 translate-y-[-100%] border-2 border-solid border-black">
          <p className="absolute left-4 top-2 w-36 text-2xl">{title}</p>
          <p className="absolute bottom-2 left-4 text-xl">{description}</p>
          <div className="absolute right-0 top-0">
            <Image
              alt="arrow-up-right"
              height={40}
              src={arrowUpRight}
              width={40}
            />
          </div>
        </div>
        <p className="absolute bottom-2 right-2 text-center text-lg text-lime-700">
          {year}
        </p>
      </div>
    </Link>
  );
};
