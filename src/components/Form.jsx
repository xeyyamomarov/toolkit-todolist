import { useState } from "react";
import { createUser } from "../Slices/UserSlice/usersSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useUserContext } from "../context/UserContext";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function createNewUser() {
    if (!username || !email || !password) return null;
    const newUser = {
      id: crypto.randomUUID(),
      name: username,
      email,
      password,
    };
    dispatch(createUser(newUser));
    setUsername("");
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        <Button onClick={createNewUser}>Create new user</Button>
        {/* <button onClick={createNewUser}>Create new user</button> */}
      </form>
      {openModal && <Modal />}
    </>
  );
};

export default Form;
