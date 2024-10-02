import { NormalText, TitleBasic } from "@/components/atoms/Texts";
import { Icon } from "@iconify/react";

const ExtraSkills = () => {
  return (
    <div className="w-full">
      <TitleBasic>Extra Skills</TitleBasic>
      <ul>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>Tailwind, Bootstrap</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>Semantic HTML, CSS BEM</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>EC2, S3, AWS</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>GIT and Github Actions</NormalText>
        </li>
      </ul>
    </div>
  );
};

export default ExtraSkills;
