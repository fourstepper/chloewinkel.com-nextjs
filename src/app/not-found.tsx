import { BackHome } from "@BackHome";
import { Header } from "@Header";

const NotFoundError = () => {
  return (
    <div>
      {/* <h1 className="text-6xl">Page not found, sorry!</h1> */}
      <Header heading="Page not found, sorry!" />
      <div className="my-16" />
      <BackHome />
    </div>
  );
};

export default NotFoundError;
