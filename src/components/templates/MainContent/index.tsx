import EducationSection from "@components/organisms/EducationSection/index";
import Hero from "@components/organisms/Hero/index";
import KnowledgeSecction from "@components/organisms/KnowledgeSecction/index";
import PortfolioSection from "@components/organisms/PortfolioSection/index";

import { NormalText, MainTitle } from "@components/atoms/Texts/index";
import SocialMediaList from "@components/molecules/SocialMediaList/index";

const MainContent = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero></Hero>

      <div className="w-full px-8">
        <div className="text-center my-12">
          <MainTitle>My Knowledge</MainTitle>
          <NormalText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </NormalText>
        </div>
        <KnowledgeSecction></KnowledgeSecction>
        <div className="text-center my-12">
          <MainTitle>Education</MainTitle>
          <NormalText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </NormalText>
        </div>
      </div>
      <EducationSection></EducationSection>

      <div className="w-full px-8">
        <div className="text-center my-12">
          <MainTitle>Portfolio</MainTitle>
          <NormalText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </NormalText>
        </div>
      </div>
      <PortfolioSection></PortfolioSection>
      <div className="mt-16">
        <SocialMediaList></SocialMediaList>
      </div>
    </div>
  );
};

export default MainContent;
