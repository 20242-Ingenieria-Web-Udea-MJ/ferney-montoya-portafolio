import SecudaryContent from "@components/templates/SecundaryContent/index";
import MainContent from "@components/templates/MainContent/index";

export default function Home() {
  return (
    <div className="w-screen relative">
      <SecudaryContent></SecudaryContent>
      <MainContent></MainContent>
    </div>
  );
}
