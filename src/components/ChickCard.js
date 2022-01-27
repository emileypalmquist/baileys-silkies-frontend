import { useState } from "react";
import { Card, Icon, Image, Modal } from "semantic-ui-react";
import { displayAge } from "../helpers/calculations";
import { deleteChicken } from "../helpers/api";
import { ChickenForm } from ".";

export default function ChickCard({
  chick: {
    id,
    hatch_date,
    sex,
    color,
    naked_neck,
    feather_type,
    photo,
    coop_id,
  },
  admin,
  chick,
  setChicks,
  coops,
  setCoops,
}) {
  const [open, setOpen] = useState(false);
  const extra = (
    <p>
      <Icon circular name="bug" />
      need to handle show # interested
    </p>
  );

  const adminExtra = () => (
    <p>
      {"# interested"}
      {modal}
      <Icon
        circular
        name="trash alternate outline"
        onClick={() => deleteChicken(id, handleDeleted)}
      />
    </p>
  );

  function handleDeleted() {
    const coop = coops.find((coop) => coop.id === coop_id);
    const updatedCoop = { ...coop, available_count: coop.available_count - 1 };
    setCoops((currentCoops) =>
      currentCoops.map((coop) => (coop.id === coop_id ? updatedCoop : coop))
    );
    setChicks((currentChicks) =>
      currentChicks.filter((chick) => chick.id !== id)
    );
  }

  const modal = (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon circular name="edit" />}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <ChickenForm
          coops={coops}
          setCoops={setCoops}
          chick={chick}
          action="update"
        />
      </Modal.Content>
      <Modal.Actions>
        <Icon name="checkmark" onClick={() => setOpen(false)} />
      </Modal.Actions>
    </Modal>
  );

  return (
    <Card
      key={id}
      style={{ margin: "1em" }}
      header={`${color}, ${sex === "n/a" ? "Straight run" : sex}`}
      image={<Image src={photo} alt={color} />}
      meta={displayAge(hatch_date)}
      description={naked_neck ? `naked neck, ${feather_type}` : feather_type}
      extra={admin?.admin ? adminExtra() : extra}
    />
  );
}
