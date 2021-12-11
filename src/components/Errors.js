import { v4 as uuid } from "uuid";
export default function Errors({ errors }) {
  return <>{errors && errors.map((error) => <p key={uuid()}>{error}</p>)}</>;
}
