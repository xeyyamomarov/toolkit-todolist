import { useDispatch } from "react-redux";
// import { deleteUser } from "../Slices/UserSlice/usersSlice";
import { useUserContext } from "../context/UserContext";
import Button from "./Button";
import { useDeleteUserMutation } from "../Slices/UserSlice/usersSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();

  function deleteUserFunc(user) {
    dispatch(deleteUser(user));
  }

  const { setOpenModal, setUpdateValue } = useUserContext();

  function openUpdateModal() {
    setUpdateValue(user);
    setOpenModal(true);
  }

  console.log(user, "user");
  return (
    <div className="user-context">
      <div>
        <p> Username: {user.name}</p>
        <p> Email: {user.email}</p>
      </div>
      <div className="buttons">
        <Button onClick={() => deleteUserFunc(user.id)}>Delete</Button>
        <Button onClick={openUpdateModal}>Update</Button>
        {/* <button onClick={() => deleteUserFunc(user.id)}>Delete</button>
        <button
          onClick={() => {
            setUpdateValue(user);
            setOpenModal(true);
          }}
        >
          Update
        </button> */}
      </div>
    </div>
  );
};

export default User;
