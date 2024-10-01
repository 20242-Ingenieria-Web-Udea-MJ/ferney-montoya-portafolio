import { NormalText, TitleBasic } from "@components/atoms/Texts/index";

const EducationCard = ({
  entity,
  rol,
  dates,
  title,
  description,
}: {
  entity: string;
  rol: string;
  dates: string;
  title: string;
  description: string;
}) => {
  return (
    <article className="p-8 md:flex md:px-0">
      <div className="text-center md:w-1/2 md:mr-3 md:text-start">
        <TitleBasic>{entity}</TitleBasic>
        <div className="flex mt-3 mb-6 justify-center md:justify-start">
          <NormalText color="text-black" fontSize="text-sm">
            {rol}
          </NormalText>
          <div className="w-fit ml-8 p-0.5 bg-primaryColor text-white text-xxs">
            <p className="inline-block">{dates}</p>
          </div>
        </div>
      </div>
      <div className="text-justify md:w-3/4">
        <div className="text-start">
          <TitleBasic>{title}</TitleBasic>
        </div>
        <NormalText>
          {description}
        </NormalText>
      </div>
    </article>
  );
};

export default EducationCard;
