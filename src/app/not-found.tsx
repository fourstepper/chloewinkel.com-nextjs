import { BackHome } from "@BackHome";

const NotFoundError = () => {
  return (
    <div className="fixed top-[30%]">
      <h1 className="text-8xl">Page not found, sorry!</h1>
      <div className="py-16" />
      <BackHome />
    </div>
  );
};

export default NotFoundError;
