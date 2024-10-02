import EducationSection from "@components/organisms/EducationSection/index";
import Hero from "@components/organisms/Hero/index";
import KnowledgeSecction from "@components/organisms/KnowledgeSecction/index";
import PortfolioSection from "@components/organisms/PortfolioSection/index";

import { NormalText, MainTitle } from "@components/atoms/Texts/index";
import SocialMediaList from "@components/molecules/SocialMediaList/index";

const MainContent = () => {
  return (
    <div className="w-full md:relative overflow-x-hidden md:w-auto md:flex">
      <div className="w-full overflow-x-hidden md:w-auto md:px-8">
        <Hero></Hero>

        <div className="w-full px-8 md:px-0">
          <div className="text-center my-12">
            <MainTitle>My Knowledge</MainTitle>
            <div className="md:w-1/2 md:mx-auto">
              <NormalText>
                I focus on enhancing user experience and web development through
                constant growth and innovative solutions.
              </NormalText>
            </div>
          </div>
          <KnowledgeSecction></KnowledgeSecction>
          <div className="text-center my-12">
            <MainTitle>Education</MainTitle>
            <div className="md:w-1/2 md:mx-auto">
              <NormalText>
                I have completed courses in web and mobile development, focusing
                on both frontend and backend skills. I am also currently
                pursuing a degree in Systems Engineering.
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
                I present my latest projects that demonstrate my web development
                skills, including a restaurant recommendation app, a
                user-friendly calculator, and a management system for academic
                requests.
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
