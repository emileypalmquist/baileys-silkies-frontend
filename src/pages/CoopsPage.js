import { CardContainer } from "../styles";
import { CoopCard } from "../components";

function CoopsPage({ coops, admin }) {
  const renderCoops = coops.map((coop) => (
    <CoopCard key={coop.id} coop={coop} admin={admin} />
  ));

  return (
    <>
      <h2>Our coops</h2>
      <CardContainer>{renderCoops}</CardContainer>
    </>
  );
}

export default CoopsPage;
