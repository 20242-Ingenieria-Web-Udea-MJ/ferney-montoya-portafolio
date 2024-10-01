"use client";

import ProfilePerson from "@components/molecules/ProfilePerson/index";
import PersonalDescription from "@components/molecules/PersonalDescription/index";
import Languages from "@components/molecules/Languages/index";
import ProgrammingLanguages from "@components/molecules/ProgrammingLanguages/index";
import ExtraSkills from "@components/molecules/ExtraSkills/index";
import DivisorBar from "@components/atoms/DivisorBar/index";

const SideBar = ({position}: {position: string}) => {

  return (
    <aside
      className={`w-72 h-full fixed z-20 overflow-y-auto ${position} bg-white p-6 transition-all duration-500 ease-in-out transform md:static md:overflow-y-auto`}
    >
      <ProfilePerson></ProfilePerson>
      <DivisorBar></DivisorBar>
      <PersonalDescription></PersonalDescription>
      <DivisorBar></DivisorBar>
      <Languages></Languages>
      <DivisorBar></DivisorBar>
      <ProgrammingLanguages></ProgrammingLanguages>
      <DivisorBar></DivisorBar>
      <ExtraSkills></ExtraSkills>
    </aside>
  );
};

export default SideBar;
