"use client"

import Image, { StaticImageData } from "next/image";
import { NormalText, TitleBasic } from "@components/atoms/Texts/index";
import { Icon } from "@iconify/react";
import Modal from "@components/molecules/Modal/index";
import { useState } from "react";

const PortfolioCard = ({
  title,
  text,
  img,
  githubUrl, // nueva prop
}: {
  title: string;
  text: string;
  img: StaticImageData;
  githubUrl: string; // URL del repositorio
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <article className="w-full pb-5 pt-10 bg-white">
      <Image className="shadow-top mb-5" width={700} alt="web page" src={img} />
      <div className="px-5">
        <TitleBasic>{title}</TitleBasic>
        <NormalText>{text}</NormalText>
        <button
          onClick={handleOpenModal}
          className="inline-block mt-2 text-primaryColor flex items-center cursor-pointer hover:underline transition duration-300 ease-in-out transform"
        >
          <p className="flex items-center text-lg font-medium mb-2 mr-2">
            Learn More
          </p>
          <Icon className="mb-1" icon="weui:arrow-filled" />
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        content={text}
        githubUrl={githubUrl} 
        img={img} 
      />
    </article>
  );
};

export default PortfolioCard;
