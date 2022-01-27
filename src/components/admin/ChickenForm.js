import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Input, Label, FormField, Select } from "../../styles";
import { Errors } from "..";
import { createChicken } from "../../helpers/api";

export default function ChickenForm({ coops, setCoops, chick, action }) {
  const [chicken, setChicken] = useState(initialChicken);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (chick) {
      const {
        hatch_date,
        sex,
        color,
        naked_neck,
        feather_type,
        available,
        coop_id,
      } = chick;

      setChicken({
        hatchDate: hatch_date,
        sex,
        color,
        available,
        nakedNeck: naked_neck,
        featherType: feather_type,
        coopId: coop_id,
      });
    }
  }, [chick]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (action === "create") {
      createChicken(chicken, onSuccess, onFailure);
    } else if (action === "update") {
      //update chicken
      setLoading(false);
    } else {
      console.log("something went wrong");
    }
  }

  function onFailure(errors) {
    setErrors(errors);
    setLoading(false);
  }

  function onSuccess(chicken) {
    setLoading(false);

    const newCoops = coops.map((coop) =>
      coop.id === chicken.coop_id
        ? { ...coop, available_count: coop.available_count + 1 }
        : coop
    );

    setCoops(newCoops);
    history.push("/available-chicks");
  }

  function handleChange(e) {
    setChicken((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  function handleBoolChange(e) {
    setChicken((current) => ({
      ...current,
      [e.target.name]: !current[e.target.name],
    }));
  }

  function handleFile(e) {
    setChicken((current) => ({ ...current, photo: e.target.files[0] }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Errors errors={errors} />
      <FormField>
        <Label htmlFor="color">Color</Label>
        <Input
          type="text"
          id="color"
          name="color"
          value={chicken.color}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="featherType">Feather Type</Label>
        <Input
          type="text"
          id="featherType"
          name="featherType"
          value={chicken.featherType}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="sex">Sex</Label>
        <Select id="sex" name="sex" value={chicken.sex} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">n/a</option>
        </Select>
      </FormField>
      <FormField>
        <Label htmlFor="coopId">Coop</Label>
        <Select
          id="coopId"
          name="coopId"
          value={chicken.coopId}
          onChange={handleChange}
        >
          <option value="">--Please choose an option--</option>
          {coops.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField>
        <Label htmlFor="hatchDate">Hatch Date</Label>
        <Input
          type="date"
          id="hatchDate"
          name="hatchDate"
          value={chicken.hatchDate}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="photo">Photo</Label>
        <Input type="file" id="photo" onChange={handleFile} />
      </FormField>
      <FormField>
        <Label htmlFor="available">Available</Label>
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={chicken.available}
          onChange={handleBoolChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="nakedNeck">Naked Neck</Label>
        <input
          type="checkbox"
          id="nakedNeck"
          name="nakedNeck"
          checked={chicken.nakedNeck}
          onChange={handleBoolChange}
        />
      </FormField>
      {/* <AvatarEditor
        image="https://www.mypetchicken.com/images/product_images/Popup/White-Silkie-2190-L.jpg"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      /> */}
      <FormField>
        <Button type="submit">{loading ? "Loading" : "Create"}</Button>
      </FormField>
    </form>
  );
}

const initialChicken = {
  coopId: "",
  sex: "",
  hatchDate: "",
  color: "",
  nakedNeck: false,
  featherType: "",
  available: true,
  photo: "",
};
