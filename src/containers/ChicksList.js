import { ChickCard } from "../components";
import { CardContainer } from "../styles";

export default function ChicksList({
  admin,
  chicks,
  setChicks,
  coops,
  setCoops,
}) {
  const renderChicks = chicks.map((chick) => (
    <ChickCard
      key={chick.id}
      admin={admin}
      chick={chick}
      setChicks={setChicks}
      coops={coops}
      setCoops={setCoops}
    />
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
