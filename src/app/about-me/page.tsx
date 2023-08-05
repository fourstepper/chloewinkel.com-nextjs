import { BackHome } from "@BackHome";
import { Header } from "@Header";

const AboutMe = () => {
  return (
    <div>
      <Header heading="About me" />
      <div className="mt-auto pt-16">
        <BackHome />
      </div>
    </div>
  );
};

export default AboutMe;
