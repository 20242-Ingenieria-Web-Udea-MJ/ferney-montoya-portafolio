import HireMeButton from "@/components/atoms/HireMeButton";
import HeroTitle from "@components/atoms/HeroTitle/index";
import { NormalText } from "@components/atoms/Texts/index";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section className="flex flex-col p-6 text-center items-center bg-white md:mx-auto md:text-start md:flex-row md:px-16 md:py-20 md:items-center">
      <div>
        <HeroTitle></HeroTitle>
        <div className="md:w-1/2">
          <NormalText>
            I love learning new things and I easily adapt to new professional
            challenges. With a constant focus on personal and professional
            growth, I enjoy tackling challenges and finding innovative solutions
            to enhance user experience and web development.
          </NormalText>
        </div>
        <div className="mt-9 flex justify-center md:block">
          <HireMeButton></HireMeButton>
        </div>
      </div>
      <div className="hidden md:block">
        <Icon
          icon="game-icons:puzzle"
          className="text-primaryColor text-big-icon"
        ></Icon>
      </div>
    </section>
  );
};

export default Hero;
