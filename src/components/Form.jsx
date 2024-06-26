import { useState } from "react";
import Modal from "./Modal";
import { useUserContext } from "../context/UserContext";
import Button from "./Button";
import Input from "./Input";
import { useCreateNewUserMutation } from "../Slices/UserSlice/usersSlice";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createNewUser, { isLoading }] = useCreateNewUserMutation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !email || !password) return null;
    const newUser = {
      id: crypto.randomUUID(),
      name: username,
      email,
      password,
    };

    try {
      createNewUser(newUser).unwrap();
    } catch (error) {
      console.log(error);
    }

    setUsername("");
    setEmail("");
    setPassword("");
  }

  const { openModal } = useUserContext();

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <Input
          type="text"
          placeholdeer="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholdeer="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholdeer="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <Button disabled={isLoading}>Create new user</Button>
        {/* <button onClick={createNewUser}>Create new user</button> */}
      </form>
      {openModal && <Modal />}
    </>
  );
};

export default Form;
