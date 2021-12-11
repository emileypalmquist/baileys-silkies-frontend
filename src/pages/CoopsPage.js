import React, { useEffect, useState } from "react";

import { CardContainer } from "../styles";
import { getCoops } from "../helpers/api";
import { CoopCard } from "../components";

function CoopsPage() {
  const [coops, setCoops] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getCoops(setCoops, setErrors);
  }, []);

  const renderCoops = coops.map((coop) => (
    <CoopCard key={coop.id} coop={coop} />
  ));

  return (
    <>
      <h2>Our coops</h2>
      <CardContainer>{renderCoops}</CardContainer>
    </>
  );
}

export default CoopsPage;
