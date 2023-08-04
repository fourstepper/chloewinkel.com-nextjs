import Header from "@Header";
import BackHome from "@BackHome";
import GraphicDesignLinkBox from "@GraphicDesignLinkBox";

const GraphicDesign = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header heading="Graphic Design" />
      <div className="flex flex-row flex-wrap place-content-center items-center gap-x-16 xl:gap-x-32">
        <GraphicDesignLinkBox
          href="/graphic-design/hermes"
          title="hermes"
          description="a sneaker brand"
          year="2021"
        />
        <GraphicDesignLinkBox
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          description="a tree discovery website"
          year="2023"
        />
        <GraphicDesignLinkBox
          href="/graphic-design/hermes"
          title="hermes"
          description="a sneaker brand"
          year="2021"
        />
        <GraphicDesignLinkBox
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          description="a tree discovery website"
          year="2023"
        />
        <GraphicDesignLinkBox
          href="/graphic-design/stromy-trebonska"
          title="stromy třeboňska"
          description="a tree discovery website"
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
