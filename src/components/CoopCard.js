import { Link, useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

export default function CoopCard({
  coop: { id, name, available_chickens, description },
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
      image="https://www.mypetchicken.com/images/product_images/Popup/White-Silkie-2190-L.jpg"
      // meta={description}
      description={
        <Link to={`/coops/${id}/available-chicks`}>
          {available_chickens.length} chicks available
        </Link>
      }
      extra={extra}
    />
    // </div>
  );
}
