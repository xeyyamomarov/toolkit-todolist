import { useDispatch } from "react-redux";
// import { updateUser } from "../Slices/UserSlice/usersSlice";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import Button from "./Button";
import Input from "./Input";
import { useUpdateUserMutation } from "../Slices/UserSlice/usersSlice";

const Modal = () => {
  const { setOpenModal, updateValue } = useUserContext();
  const [passwordView, setPasswordView] = useState(false);

  const [updateUser, { isLoading: updateIsLoading }] = useUpdateUserMutation();

  const [newUpdateUser, setNewUpdateUser] = useState({
    name: updateValue.name,
    email: updateValue.email,
    password: updateValue.password,
    id: updateValue.id,
  });

  // const newUser={
  //   name:newUpdateUser.name,
  //   email:newUpdateUser.email,
  //   password:newUpdateUser.password,
  //   id:newUpdateUser
  // }

  const updateUserFunc = async () => {
    try {
      await updateUser({
        name: newUpdateUser.name,
        email: newUpdateUser.email,
        password: newUpdateUser.password,
        id: newUpdateUser.id,
      }).unwrap();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <Button
            disabled={updateIsLoading}
            onClick={() => setOpenModal(false)}
          >
            X
          </Button>
        </div>
        <div className="modal-context">
          {/* <input
            type="text"
            value={newUpdateUser.name}
            onChange={(e) =>
              setNewUpdateUser({ ...newUpdateUser, name: e.target.value })
            }
          />
          <input
            type="email"
            value={newUpdateUser.email}
            onChange={(e) =>
              setNewUpdateUser({ ...newUpdateUser, email: e.target.value })
            }
          /> */}
          <Input
            type="text"
            value={newUpdateUser.name}
            onChange={(e) =>
              setNewUpdateUser({ ...newUpdateUser, name: e.target.value })
            }
          />
          <Input
            type="email"
            value={newUpdateUser.email}
            onChange={(e) =>
              setNewUpdateUser({ ...newUpdateUser, email: e.target.value })
            }
          />
          <div className="password-input">
            <Input
              type={passwordView ? "text" : "password"}
              value={newUpdateUser.password}
              onChange={(e) =>
                setNewUpdateUser({ ...newUpdateUser, password: e.target.value })
              }
            />
            <span onClick={() => setPasswordView(!passwordView)}>Icon</span>
          </div>

          {/* <button onClick={() => updateUserFunc()}>Change </button> */}
          <Button onClick={updateUserFunc}>Change</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
