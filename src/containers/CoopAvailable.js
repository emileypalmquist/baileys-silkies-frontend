import { useParams, Link } from "react-router-dom";
import { AvailablePage } from "../pages";

export default function CoopAvailable({ admin, coops, setCoops }) {
  const { id } = useParams();
  const coopId = parseInt(id);
  const coop = coops.find((c) => c.id === coopId);
  const title = coop && <h2>{coop.name} Coop</h2>;

  return (
    <div>
      {title}
      <Link to={`/coops/${coopId}`}>Coop Info</Link>
      <AvailablePage admin={admin} coops={coops} setCoops={setCoops} />
    </div>
  );
}
