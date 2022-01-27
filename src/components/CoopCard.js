import { Link, useHistory } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";

export default function CoopCard({
  coop: { id, name, available_count, description, photo },
  admin,
}) {
  // const history = useHistory();

  // function handleButtonClick(e) {
  //   e.stopPropagation();
  // }

  // displayed in extra of card
  const extra = (
    <Button
      as={Link}
      to={`/coops/${id}`}
      // onClick={handleButtonClick}
    >
      Coop Info
    </Button>
  );

  return (
    // <div onClick={() => history.push(`/coops/${id}`)}>
    <Card
      style={{ margin: "1em" }}
      header={name}
      image={<Image src={photo} alt={name} wrapped />}
      // meta={description}
      description={
        <Link to={`/coops/${id}/available-chicks`}>
          {available_count} chicks available
        </Link>
      }
      extra={extra}
    />
    // </div>
  );
}
