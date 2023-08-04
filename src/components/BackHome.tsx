import Link from "next/link";

export const BackHome = () => {
  return (
    <Link href="/">
      <p className="text-center text-4xl underline decoration-indigo-500 decoration-wavy decoration-2 underline-offset-8">
        Back Home
      </p>
    </Link>
  );
};
