import Carousel from "@components/molecules/Carousel/index";
import PortfolioCard from "@components/molecules/PortfolioCard/index";
import restoPicture from "@/assets/restorec2.jpeg";

const PortFolioSection = () => {
  return (
    <Carousel>
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="How to make web templates"
        githubUrl="https://github.com/user/repo1" // URL del repositorio
      />
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="Another Project"
        githubUrl="https://github.com/user/repo2" // URL del repositorio
      />
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="Portfolio Card"
        githubUrl="https://github.com/user/repo3" // URL del repositorio
      />
    </Carousel>
  );
};

export default PortFolioSection;
