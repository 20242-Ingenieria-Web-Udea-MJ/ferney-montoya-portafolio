"use client"

import SideBar from "@components/organisms/SideBar/index";
import ShowSideBarButton from "@components/atoms/ShowSideBarButton/index";
import { useState } from "react";

const SecudaryContent = () => {

  const [position, setSetPosition] = useState('-left-72');

  const togglePosition = () => {
    setSetPosition((prevPosition) => (prevPosition === '-left-72' ? '-left-0' : '-left-72'));
  };

  return (
    <div>
      <SideBar position={position} ></SideBar>
      <ShowSideBarButton togglePosition={togglePosition}></ShowSideBarButton>
    </div>
  );
};

export default SecudaryContent;
