import React from "react";
import { Dialog } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
  githubUrl: string;
  img: StaticImageData; // Nueva propiedad para la imagen
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, title, githubUrl, img }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
          {/* Mostrar la imagen en el modal */}
          <Image
            className="shadow-top mb-5"
            width={700}
            alt="web page in modal"
            src={img}
          />
          <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
          <Dialog.Description className="mt-2">{content}</Dialog.Description>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Close
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              <Icon icon="akar-icons:github-fill" className="mr-2" />
              GitHub
            </a>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
