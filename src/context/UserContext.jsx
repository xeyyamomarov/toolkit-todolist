import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [updateValue, setUpdateValue] = useState(null);

  return (
    <UserContext.Provider
      value={{
        openModal,
        setOpenModal,
        updateValue,
        setUpdateValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export { useUserContext, UserContextProvider };
