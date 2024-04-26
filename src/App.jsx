import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   decrementByAmount,
// } from "./Slices/CounterSlice/counterSlice";
import { useEffect } from "react";
import { getUser } from "./Slices/UserSlice/usersSlice";
import Form from "./components/Form";
import User from "./components/User";
import { UserContextProvider } from "./context/UserContext";

function App() {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const incrementOperation = () => {
  //   dispatch(increment());
  // };
  // const decrementOpetation = () => {
  //   if (count > 0) {
  //     dispatch(decrement());
  //   }
  // };
  // const incrementByAmountOpetation = (value) => {
  //   dispatch(incrementByAmount(value));
  // };
  // const decrementByAmountOpetation = (value) => {
  //   if (count > 5) {
  //     dispatch(decrementByAmount(value));
  //   }
  // };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <UserContextProvider>
        {loading ? (
          <h2>Loading....</h2>
        ) : (
          <>
            <Form />
            {users?.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </>
        )}
      </UserContextProvider>
    </>
  );
}

export default App;
