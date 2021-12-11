import { Card, Icon } from "semantic-ui-react";
import { displayAge } from "../helpers/calculations";

export default function ChickCard({
  chick: { id, hatch_date, sex, color, naked_neck, feather_type },
}) {
  return (
    <Card
      key={id}
      style={{ margin: "1em" }}
      header={`${color}, ${sex === "n/a" ? "Straight run" : sex}`}
      image="https://www.mypetchicken.com/images/product_images/Popup/White-Silkie-2190-L.jpg"
      meta={displayAge(hatch_date)}
      description={naked_neck ? `naked neck, ${feather_type}` : feather_type}
      extra={extra}
    />
  );
}

// displayed in extra of card
const extra = (
  <p>
    <Icon circular name="bug" />
    need to handle show interest
  </p>
);
