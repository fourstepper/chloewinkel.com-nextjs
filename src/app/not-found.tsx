import Link from "next/link";

const NotFoundError = () => {
  return (
    <div className="fixed top-[30%]">
      <h1 className="text-8xl">Page not found, sorry!</h1>
      <div className="py-16"></div>
      <Link href="/">
        <p className="text-4xl text-center underline decoration-indigo-500 decoration-wavy underline-offset-8 decoration-2">
          Back Home
        </p>
      </Link>
    </div>
  );
};

export default NotFoundError;
