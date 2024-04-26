import { useEffect } from "react";
import { useGetUserQuery } from "./Slices/UserSlice/usersSlice";
import Form from "./components/Form";
import User from "./components/User";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  const { data: users, isLoading } = useGetUserQuery();

  // 1)
  // const {
  //   data: users,
  //   isLoading,
  //   refetch,
  // } = useGetUserQuery({
  //   refetchOnMountOrArgChange: true,
  // });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     refetch();
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  // 2)
  // const { data: users, isLoading } = useGetUserQuery(undefined, {
  //   pollingInterval: 1000,
  // });

  return (
    <div>
      <UserContextProvider>
        {isLoading ? (
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
    </div>
  );
};

export default App;
