import { ChickCard } from "../components";
import { CardContainer } from "../styles";

export default function ChicksList({ chicks }) {
  const renderChicks = chicks.map((chick) => (
    <ChickCard key={chick.id} chick={chick} />
  ));

  return (
    <div>
      <h3>
        {chicks.length > 0 ? "Available Chickens" : "No Available Chickens"}
      </h3>
      <CardContainer>{renderChicks}</CardContainer>
    </div>
  );
}
