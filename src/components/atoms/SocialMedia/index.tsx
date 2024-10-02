import { Icon } from "@iconify/react";

const SocialMedia = ({ icon }: { icon: string }) => {
  return (
    <div className="w-12 h-12 flex justify-center items-center bg-primaryColor rounded-full transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 active:shadow-none active:scale-95">
      <Icon icon={icon} className="text-3xl"></Icon>
    </div>
  );
};

export default SocialMedia;
