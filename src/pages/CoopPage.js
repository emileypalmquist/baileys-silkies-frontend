import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { getAvailableChicksCoop } from "../helpers/api";
import { Errors } from "../components";
// import { ChicksList } from "../containers";

export default function CoopPage({ admin, coops }) {
  const [errors, setErrors] = useState([]);
  // const [chickens, setChickens] = useState([])

  const { id } = useParams();
  const coop = coops.find((c) => c.id === parseInt(id));

  if (!coop) return <div>No Coop Found</div>;

  // useEffect(getCoopsChickens, [id]);

  // function getCoopsChickens() {
  //   getAvailableChicksCoop(id, setChickens, setErrors);
  // }

  const { name, description } = coop;
  return (
    <>
      <Errors errors={errors} />
      <h2>{name}</h2>
      <p>{description}</p>
    </>
  );
}
