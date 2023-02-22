import React from "react";
//componente padre almacena input de busqueda

interface UseContext {
  username: string;
  changeUsername: (username: string) => void;
}
export const MyUserContext = React.createContext<UseContext>({
  username: "",
  changeUsername: () => {},
});
interface Props {
  children?: React.ReactNode;
}
export const MyUserProvider: React.FC<Props> = ({ children }) => {
  const [username, setUsername] = React.useState("lemoncode");
  return (
    <MyUserContext.Provider value={{ username, changeUsername: setUsername }}>
      {children}
    </MyUserContext.Provider>
  );
};
