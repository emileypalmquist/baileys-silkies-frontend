export default function SexFilter({ sexFilter, setSexFilter }) {
  function handleChange(e) {
    setSexFilter(e.target.value);
  }
  return (
    <select value={sexFilter} onChange={handleChange}>
      <option value="">--Please choose an option--</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="n/a">Straigt run</option>
    </select>
  );
}
