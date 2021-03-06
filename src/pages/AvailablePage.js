import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAvailableChicksCoop, getAllAvailableChicks } from "../helpers/api";
import { calculateWeeks } from "../helpers/calculations";
import { AgeFilter, SexFilter, Errors } from "../components";
import { ChicksList } from "../containers";

function AvailablePage({ admin, coops, setCoops }) {
  const [errors, setErrors] = useState([]);
  const [chicks, setChicks] = useState([]);
  const [over8, setOver8] = useState(false);
  const [between6And8, setBetween6And8] = useState(false);
  const [between4And6, setBetween4And6] = useState(false);
  const [under4, setUnder4] = useState(false);
  const [sexFilter, setSexFilter] = useState("");
  const [nakedNeck, setNakedNeck] = useState(false);

  const { id } = useParams();

  function handleErrors(errors) {
    setErrors(errors);
    setChicks([]);
  }

  function getChicks() {
    setErrors([]);
    if (id) {
      // can refactor to get only chickens from particular cooop with query params
      getAvailableChicksCoop(id, setChicks, handleErrors);
    } else {
      getAllAvailableChicks(setChicks, handleErrors);
    }
  }

  useEffect(getChicks, [id]);

  function handleAgeFilter({ hatch_date }) {
    let weeks = calculateWeeks(hatch_date);
    let isOver8 = over8 && weeks > 8;
    let isBetween6And8 = between6And8 && weeks >= 6 && weeks <= 8;
    let isBetween4And6 = between4And6 && weeks >= 4 && weeks <= 6;
    let isUnder4 = under4 && weeks < 4;

    return isOver8 || isBetween6And8 || isBetween4And6 || isUnder4;
  }

  function filterChicksByAge() {
    if (over8 || between6And8 || between4And6 || under4) {
      return chicks.filter(handleAgeFilter);
    } else {
      return chicks;
    }
  }

  function filterBySex() {
    if (sexFilter.length) {
      return filterChicksByAge().filter((chick) => chick.sex === sexFilter);
    } else {
      return filterChicksByAge();
    }
  }

  function filterNakedNeck() {
    if (nakedNeck) {
      return filterBySex().filter((chick) => chick.naked_neck);
    } else {
      return filterBySex();
    }
  }

  // need to get feather_types and colors for filters
  return (
    <>
      <Errors errors={errors} />
      <AgeFilter
        setOver8={setOver8}
        setBetween6And8={setBetween6And8}
        setBetween4And6={setBetween4And6}
        setUnder4={setUnder4}
        over8={over8}
        between6And8={between6And8}
        between4And6={between4And6}
        under4={under4}
      />
      <SexFilter sexFilter={sexFilter} setSexFilter={setSexFilter} />
      <label>
        Naked Neck
        <input
          type="checkbox"
          id="naked-neck"
          name="naked-neck"
          value={nakedNeck}
          onClick={() => setNakedNeck((current) => !current)}
        />
      </label>

      <ChicksList
        admin={admin}
        chicks={filterNakedNeck()}
        setChicks={setChicks}
        coops={coops}
        setCoops={setCoops}
      />
    </>
  );
}

export default AvailablePage;
