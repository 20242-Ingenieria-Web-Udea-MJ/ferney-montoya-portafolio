import EducationCard from "@components/molecules/EducationCard/index";
import DivisorBar from "@components/atoms/DivisorBar/index";
import { EducationList } from "@/utils/EducationList";

const EducationSection = () => {
  return (
    <section className="w-full">
      <ul className="w-full mt-3 flex flex-wrap justify-center bg-white md:px-8">
        {EducationList.map((item, index) => (
          <li className="mb-3" key={index}>
            <EducationCard
              dates={item.dates}
              description={item.description}
              entity={item.entity}
              rol={item.rol}
              title={item.title}
            />
            {index !== EducationList.length - 1 && <DivisorBar />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
