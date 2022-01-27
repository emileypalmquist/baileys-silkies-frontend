import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormField, Input, Label } from "../../styles";
import { Errors } from "..";
import { Button } from "semantic-ui-react";
import { login } from "../../helpers/api";

const initialAdmin = {
  username: "",
  password: "",
};

export default function Login({ setAdmin }) {
  const [user, setAdminData] = useState(initialAdmin);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleOk(data) {
    setAdmin(data.admin);
    localStorage.setItem("token", data.jwt);
    history.push("/admin/add-coop");
  }

  function handleErrors(errors) {
    setErrors(errors);
    setIsLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    login(user, handleOk, handleErrors);
  }

  function handleChange(e) {
    setAdminData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Errors errors={errors} />
        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            autoComplete="off"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
        </FormField>
      </form>
    </section>
  );
}
