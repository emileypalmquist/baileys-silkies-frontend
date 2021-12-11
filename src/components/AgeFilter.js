export default function AgeFilter({
  setOver8,
  setBetween6And8,
  setBetween4And6,
  setUnder4,
  over8,
  between6And8,
  between4And6,
  under4,
}) {
  const handleClick = (current) => !current;

  return (
    <>
      <label>
        Under 4 weeks
        <input
          type="checkbox"
          id="under-4-weeks"
          name="under-4-weeks"
          value={under4}
          onClick={() => setUnder4(handleClick)}
        />
      </label>
      <label>
        4 - 6 weeks
        <input
          type="checkbox"
          id="4-6-weeks"
          name="4-6-weeks"
          value={between4And6}
          onClick={() => setBetween4And6(handleClick)}
        />
      </label>
      <label>
        6 - 8 weeks
        <input
          type="checkbox"
          id="6-8-weeks"
          name="6-8-weeks"
          value={between6And8}
          onClick={() => setBetween6And8(handleClick)}
        />
      </label>
      <label>
        Over 8 weeks
        <input
          type="checkbox"
          id="over-8-weeks"
          name="over-8-weeks"
          value={over8}
          onClick={() => setOver8(handleClick)}
        />
      </label>
    </>
  );
}
