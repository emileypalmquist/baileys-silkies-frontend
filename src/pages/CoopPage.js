import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAvailableChicksCoop } from "../helpers/api";
import { Errors } from "../components";
import { ChicksList } from "../containers";

const initialCoop = { available_chickens: [] };

export default function CoopPage({ admin }) {
  const [errors, setErrors] = useState([]);
  const [coop, setCoop] = useState(initialCoop);
  const { id } = useParams();
  const { name, description, available_chickens } = coop;

  useEffect(getCoop, [id]);

  function getCoop() {
    getAvailableChicksCoop(id, setCoop, handleErrors);
  }

  function handleErrors(errors) {
    setErrors(errors);
    setCoop(initialCoop);
  }

  return (
    <>
      <Errors errors={errors} />
      <h2>{name}</h2>
      <p>{description}</p>
      <ChicksList chicks={available_chickens} admin={admin} />
    </>
  );
}
