import EducationSection from "@components/organisms/EducationSection/index";
import Hero from "@components/organisms/Hero/index";
import KnowledgeSecction from "@components/organisms/KnowledgeSecction/index";
import PortfolioSection from "@components/organisms/PortfolioSection/index";

import { NormalText, MainTitle } from "@components/atoms/Texts/index";
import SocialMediaList from "@components/molecules/SocialMediaList/index";

const MainContent = () => {
  return (
    <div className="w-full overflow-x-hidden md:w-auto md:flex">
      <div className="w-full overflow-x-hidden md:w-auto md:px-8">
        <Hero></Hero>

        <div className="w-full px-8 md:px-0">
          <div className="text-center my-12">
            <MainTitle>My Knowledge</MainTitle>
            <div className="md:w-1/2 md:mx-auto">
              <NormalText>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </NormalText>
            </div>
          </div>
          <KnowledgeSecction></KnowledgeSecction>
          <div className="text-center my-12">
            <MainTitle>Education</MainTitle>
            <div className="md:w-1/2 md:mx-auto">
              <NormalText>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </NormalText>
            </div>
          </div>
        </div>
        <EducationSection></EducationSection>

        <div className="w-full px-8">
          <div className="text-center my-12">
            <MainTitle>Portfolio</MainTitle>
            <div className="md:w-1/2 md:mx-auto">
              <NormalText>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </NormalText>
            </div>
          </div>
        </div>

        <div className="w-full md:w-full md:overflow-hidden mb-10">
          <PortfolioSection></PortfolioSection>
        </div>
      </div>
      <SocialMediaList></SocialMediaList>
    </div>
  );
};

export default MainContent;
