import { BackHome } from "@BackHome";
import { GraphicDesignLinkBox } from "@GraphicDesignLinkBox";
import { Header } from "@Header";

const GraphicDesign = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header heading="Graphic Design" />
      <div className="flex flex-row flex-wrap place-content-center items-center gap-x-16 xl:gap-x-32">
        <GraphicDesignLinkBox
          description="a sneaker brand"
          href="/graphic-design/hermes"
          title="hermes"
          year="2021"
        />
        <GraphicDesignLinkBox
          description="a tree discovery website"
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          year="2023"
        />
        <GraphicDesignLinkBox
          description="a sneaker brand"
          href="/graphic-design/hermes"
          title="hermes"
          year="2021"
        />
        <GraphicDesignLinkBox
          description="a tree discovery website"
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          year="2023"
        />
        <GraphicDesignLinkBox
          description="a tree discovery website"
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          year="2023"
        />
      </div>
      <div className="mt-auto">
        <BackHome />
      </div>
    </div>
  );
};

export default GraphicDesign;
