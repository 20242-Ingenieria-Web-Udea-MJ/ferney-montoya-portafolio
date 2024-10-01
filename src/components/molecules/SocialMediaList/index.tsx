import SocialMedia from "@components/atoms/SocialMedia/index";
import { TitleBasic } from "@components/atoms/Texts";

const SocialMediaList = () => {
  return (
    <div className="w-full pl-4 py-2 bg-white flex items-center md:flex-col md:pl-0 md:p-0 md:pt-4 md:w-36 md:h-full">
      <TitleBasic>Links</TitleBasic>
      <ul className="flex ml-4 md:flex-col md:justify-center md:items-center md:ml-0 md:w-20">
        <li className="ml-2 md:mb-2 md:ml-0">
          <a target="_blank" href="https://github.com/FerneyMontoya6">
            <SocialMedia icon="mdi:github"></SocialMedia>
          </a>
        </li>
        <li className="ml-2 md:mb-2 md:ml-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ferney-montoya-a130001a3/"
          >
            <SocialMedia icon="basil:linkedin-solid"></SocialMedia>
          </a>
        </li>
        <li className="ml-2 md:mb-2 md:ml-0">
          <a target="_blank" href="https://www.instagram.com/ferg009/">
            <SocialMedia icon="mdi:instagram"></SocialMedia>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaList;
