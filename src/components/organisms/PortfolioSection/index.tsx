import Carousel from "@components/molecules/Carousel/index";
import PortfolioCard from "@components/molecules/PortfolioCard/index";
import restoPicture from "@/assets/restorec2.jpeg";
import calclPictura from "@/assets/restorec4.jpeg";
import sigaPicture from "@/assets/siga.jpeg";

const PortFolioSection = () => {
  return (
    <Carousel>
      <PortfolioCard
        img={sigaPicture}
        text="As a programming assistant, I developed SIGA, an application for managing requests from professors and staff"
        title="SIGA applications web"
        githubUrl="https://github.com/Equipo-de-desarrollo-FCEN-UDEA/siga"
      />
      <PortfolioCard
        img={restoPicture}
        text="Application I built, which recommends nearby restaurants based on user preferences and location."
        title="RestoRec"
        githubUrl="https://github.com/FerneyMontoya6/RestoRec-2"
      />
      <PortfolioCard
        img={calclPictura}
        text="I created a calculator featuring a user-friendly interface that allows users to toggle between different design themes."
        title="Themes Toggle Calc"
        githubUrl="https://github.com/FerneyMontoya6/calculator-react-project"
      />
    </Carousel>
  );
};

export default PortFolioSection;
