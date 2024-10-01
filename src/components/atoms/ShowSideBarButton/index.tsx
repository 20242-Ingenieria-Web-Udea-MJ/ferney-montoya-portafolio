import { Icon } from "@iconify/react";

const ShowSideBarButton = ({ togglePosition }: {togglePosition: () => void}) => {
  return (
    <button
      className="w-12 h-12 rounded-full flex justify-center items-center bg-primaryColor fixed z-20 bottom-20 right-5 shadow-lg md:hidden"
      onClick={togglePosition}
    >
      <Icon icon="maki:arrow" className="w-10 font-medium"></Icon>
    </button>
  );
};

export default ShowSideBarButton;
