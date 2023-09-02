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
      <div className="h-48 w-48 sm:h-72 sm:w-72">
        <div className="relative top-[100%] m-auto h-[100%] w-[100%] translate-y-[-100%] border-2 border-solid border-black">
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
          <div className="absolute -right-11 bottom-2 w-11 rounded-r-xl bg-black text-center text-lg text-[#f3f3f3]">
            {year}
          </div>
        </div>
      </div>
    </Link>
  );
};
