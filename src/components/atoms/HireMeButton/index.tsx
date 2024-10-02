import { Icon } from "@iconify/react";

const HireMeButton = () => {
  return (
    <a href="mailto:ferney.montoyag@gmail.com" className="inline-block">
      <button className="w-36 h-12 flex justify-center items-center rounded-md bg-primaryColor transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 active:shadow-none active:scale-95">
        HIRE ME
        <Icon icon="maki:arrow" className="ml-3 w-3 font-medium"></Icon>
      </button>
    </a>
  );
};

export default HireMeButton;
