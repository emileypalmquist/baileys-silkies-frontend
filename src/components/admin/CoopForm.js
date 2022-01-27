import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import AvatarEditor from "react-avatar-editor";
import { FormField, Input, Label, Textarea } from "../../styles";
import { Errors } from "..";
import { createCoop } from "../../helpers/api";

export default function CoopForm({ setCoops }) {
  const [coop, setCoop] = useState(initialCoop);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    createCoop(coop, onSuccess, setErrors);
  }

  function onSuccess(coop) {
    setLoading(false);
    setCoops((current) => [...current, coop]);
    history.push("/coops");
  }

  function handleChange(e) {
    setCoop((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  function handleBoolChange(e) {
    setCoop((current) => ({
      ...current,
      [e.target.name]: !current[e.target.name],
    }));
  }

  function handleFile(e) {
    setCoop((current) => ({ ...current, photo: e.target.files[0] }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Errors errors={errors} />
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={coop.name}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={coop.description}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="photo">Photo</Label>
        <Input type="file" id="photo" onChange={handleFile} />
      </FormField>
      <FormField>
        <Label htmlFor="supplier">Supplier</Label>
        <input
          type="checkbox"
          id="supplier"
          name="supplier"
          checked={coop.supplier}
          onChange={handleBoolChange}
        />
      </FormField>
      <FormField>
        <Button type="submit">{loading ? "Loading" : "Create"}</Button>
      </FormField>
      <AvatarEditor
        image={coop.photo}
        width={280}
        height={280}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    </form>
  );
}

const initialCoop = {
  name: "",
  description: "",
  supplier: false,
  photo: null,
};
